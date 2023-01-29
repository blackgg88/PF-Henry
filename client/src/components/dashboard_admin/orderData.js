const orderData = (data, resource, order, field) => {

  //------------Tabla USERS (por _id, userName, email)
  if(resource === 'users'){
    if(order === 'ASC'){
      data = data.sort((a, b) => a[field]?.localeCompare(b[field]));
    }
    else{
      data.sort((a, b) => b[field]?.localeCompare(a[field]));
    }
  }

  //-------------Tabla PRODUCTS
  if(resource === 'products'){
    if(field === 'name'){
      if(order === 'ASC'){
        data = data.sort((a, b) => a[field]?.localeCompare(b[field]));
      }
      else{
        data.sort((a, b) => b[field]?.localeCompare(a[field]));
      }
    } 
    else if(field === 'price' || field === 'stock'){
      if(order === 'ASC'){
        data = data.sort((a, b) => b[field] - a[field]);
      }
      else{
        data.sort((a, b) => a[field] - b[field]);
      }
    }
    else if(field === 'categories'){
      if(order === 'ASC'){
        data = data.sort((a, b) => a.categories.name.localeCompare(b.categories.name));
      }
      else{
        data = data.sort((a, b) => b.categories.name.localeCompare(a.categories.name));
      }
    }
  }

  //-------------Tabla PURCHASES (por id(se rompio) y apellido-nombre. Por los otros no anda :( )
  if(resource === 'purchases'){
    // if(field === 'id'){
    //   if(order === 'ASC'){
    //     data = data.sort((a, b) => a[field]?.localeCompare(b[field]));
    //   }
    //   else{
    //     data.sort((a, b) => b[field]?.localeCompare(a[field]));
    //   }
    // }
    if(field === 'Payer'){
      if(order === 'ASC'){
        data = data.sort((a, b) => {
          let aName = a.payer?.last_name + " " + a.payer?.first_name;
          let bName = b.payer?.last_name + " " + b.payer?.first_name;
          return aName.localeCompare(bName);
        });
      }
      else{
        data = data.sort((a, b) => {
          let aName = a.payer?.last_name + " " + a.payer?.first_name;
          let bName = b.payer?.last_name + " " + b.payer?.first_name;
          return bName.localeCompare(aName);
        });
      }
    }
  }


  //------------Tabla POSTS (no funca con id ni con deleted)
  if(resource === 'posts'){
    if(field === 'title'){
      if(order === 'ASC'){
        data = data.sort((a, b) => a[field]?.localeCompare(b[field]));
      }
      else{
        data.sort((a, b) => b[field]?.localeCompare(a[field]));
      }
      
    }
    else if(field === 'author'){
      if(order === 'ASC'){
        data = data.sort((a, b) => a.author.userName?.localeCompare(b.author.userName));
      }
      else{
        data.sort((a, b) => b.author.userName?.localeCompare(a.author.userName));
      }
    }
    else if(field === 'likes'){
      if(order === 'ASC'){
        data = data.sort((a, b) => a[field].length - b[field].length);
      }
      else{
        data.sort((a, b) => b[field].length - a[field].length);
      }
    }
  }



  return data;
}

export default orderData;