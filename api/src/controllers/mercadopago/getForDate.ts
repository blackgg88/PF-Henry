import axios from "axios";
import { Request, Response } from "express";
import mercadopago, { payment } from "mercadopago";

import { ACCESS_TOKEN } from "../../../config";

mercadopago.configure({ access_token: ACCESS_TOKEN! });

interface Item {
  id: string;
  category_id: string;
  picture_url: string;
  title: string;
  quantity: number;
  unit_price: number;
}

interface Payer {
  first_name: string;
  last_name: string;
  address: {
    street_number: number;
    street_name: string;
    zip_code: number;
  };
}

interface Order {
  id: string;
}

interface Transaction_details {
  total_paid_amount: number;
}

interface Additional_info {
  items: Item[];
  payer: Payer;
}

interface PurchaseByMP {
  id: string;
  status: string;
  status_detail: string;
  date_created: string;
  order: Order;
  transaction_details: Transaction_details;
  additional_info: Additional_info;
  statement_descriptor: string;
}

interface Purchase {
  id: string;
  date_created: string;
  total_paid_amount: number;
}

export const getForDate = async (req: Request, res: Response) => {
  try {
    const response = await axios.get(
      `https://api.mercadopago.com/v1/payments/search?sort=date_approved&criteria=asc`,
      {
        headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
      }
    );

    const payments = response.data.results.map((purchase: PurchaseByMP) => {
      return {
        id: purchase.id,
        date_created: new Date(purchase.date_created).toLocaleDateString(),
        total_paid_amount: purchase.transaction_details.total_paid_amount,
      };
    });
    const result = {};

    payments.forEach(object => {
      const [day, month, year] = object.date_created.split("/");
      const key = `${day}-${month}-${year}`;

      if (!result[key]) result[key] = { date: key, totalSales: 0, totalCount: 0 };
      
      result[key].totalSales += object.total_paid_amount;
      result[key].totalCount += 1;
    });

    const tuRespuesta = Object.values(result);

    res.status(200).json(tuRespuesta);
  } catch (error) {
    res.status(500).json(error);
  }
};
