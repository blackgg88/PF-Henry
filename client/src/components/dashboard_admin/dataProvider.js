import { fetchUtils } from 'react-admin';
import { stringify } from 'query-string';

const apiUrl = 'http://localhost:3001';
const httpClient = fetchUtils.fetchJson;

const handleFormatedDate = (date_created) => {
  const dateString = date_created;
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const formatedDate = `${day}-${month}-${year}`;

  return formatedDate;
};

const dataProvider = {
  getList: async (resource, params) => {
    const { page, perPage } = params.pagination;
    let url;

    if (resource === 'purchases') {
      url = `${apiUrl}/checkout`;
    } else {
      url = `${apiUrl}/${resource}`;
    }

    const response = await fetch(url);

    let data = await response.json();

    const total = data.length;

    data = data.slice((page - 1) * perPage, page * perPage);

    if (resource === 'purchases') {
      console.log(data);
      data = data.map((purchase) => {
        return {
          id: purchase.id,
          Payer: `${purchase.payer?.last_name} ${purchase.payer?.first_name}`,
          Products: purchase.items.map(
            (product) => `${product.quantity} X ${product.title}`,
          ),
          Date_of_Purcharse: handleFormatedDate(purchase.date_created),
          Status: purchase.status,
          Status_Detail: purchase.status_detail,
          Total_Paid: purchase.total_paid_amount.toFixed(2),
        };
      });
    } else if (resource === 'products') {
      data = data.map((d) => {
        return {
          ...d,
          id: d._id,
          categories: d.categories.name,
        };
      });
    } else {
      data = data.map((d) => {
        return {
          ...d,
          id: d._id,
        };
      });
    }

    return {
      data: data,
      total: total,
    };
  },

  getOne: async (resource, params) => {
    const response = await fetch(`${apiUrl}/${resource}/${params.id}`);
    let data = await response.json();

    data = {
      data: {
        ...data,
        id: data._id,
      },
    };
    return data;
  },

  getMany: (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;
    return httpClient(url).then(({ json }) => ({ data: json }));
  },

  getManyReference: (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify({
        ...params.filter,
        [params.target]: params.id,
      }),
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;

    return httpClient(url).then(({ headers, json }) => ({
      data: json,
      total: parseInt(headers.get('content-range').split('/').pop(), 10),
    }));
  },

  update: (resource, params) =>
    httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: 'PUT',
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({ data: json })),

  updateMany: (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
      method: 'PUT',
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({ data: json }));
  },

  create: (resource, params) =>
    httpClient(`${apiUrl}/${resource}`, {
      method: 'POST',
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({
      data: { ...params.data, id: json.id },
    })),

  delete: (resource, params) =>
    httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: 'DELETE',
    }).then(({ json }) => ({ data: json })),

  deleteMany: (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
      method: 'DELETE',
    }).then(({ json }) => ({ data: json }));
  },
};

export default dataProvider;
