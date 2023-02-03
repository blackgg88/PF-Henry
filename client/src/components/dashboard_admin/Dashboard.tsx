import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader } from "@mui/material";
import UserIcon from "@mui/icons-material/Group";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import PaidIcon from "@mui/icons-material/Paid";
import {
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ComposedChart,
  Area,
  Bar,
  AreaChart,
} from "recharts";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { useAppDispatch, useAppSelector } from "../../Redux/hook.js";
import {
  ProductQuantityState,
  getCategoryQuantity,
} from "../../Redux/slice/product/product.slice";
import { productQuantity } from "../../Redux/slice/product/ProductController";
import { API_URL } from "../../../config";

export const Dashboard = () => {
  const [usersCount, setUsersCount] = useState(0);
  const [productsCount, setProductsCount] = useState(0);
  const [purchasesCount, setPurchasesCount] = useState(0);

  const dispatch = useAppDispatch();

  const CategoryQuantity: ProductQuantityState[] = useAppSelector(
    state => state.productReducer.CategoryQuantity
  );

  useEffect(() => {
    const fetchData = async () => {
      setUsersCount(
        await fetch(`${API_URL}/users`).then(res =>
          res.json().then(respon => respon.length)
        )
      );
      setProductsCount(
        await fetch(`${API_URL}/products`).then(res =>
          res.json().then(respon => respon.length)
        )
      );
      setPurchasesCount(
        await fetch(`${API_URL}/checkout`).then(res =>
          res.json().then(respon => respon.length)
        )
      );
    };
    fetchData();

    productQuantity()?.then(response => {
      dispatch(getCategoryQuantity(response));
    });
  }, []);

  useEffect(() => {
    console.log(CategoryQuantity);
  }, [CategoryQuantity]);

  const data = [
    { fecha: "25-01-2023", price: 1398 },
    { fecha: "24-01-2023", price: 2400 },
    { fecha: "26-01-2023", price: 9800 },
    { fecha: "27-01-2023", price: 3908 },
    { fecha: "28-01-2023", price: 4800 },
    { fecha: "29-01-2023", price: 3800 },
    { fecha: "30-01-2023", price: 4300 },
  ];
  const data2 = [
    { name: "24-01-2023", uv: 4 },
    { name: "25-01-2023", uv: 3 },
    { name: "26-01-2023", uv: 2 },
    { name: "27-01-2023", uv: 2 },
    { name: "28-01-2023", uv: 1 },
    { name: "29-01-2023", uv: 2 },
    { name: "30-01-2023", uv: 3 },
  ];
  const dataCategories = [
    { name: "Connectify and Control", value: 400 },
    { name: "Home Entertainment", value: 300 },
    { name: "Energy Management", value: 200 },
    { name: "Safety and Security", value: 278 },
    { name: "Confort and Ease", value: 189 },
    { name: "Lifestyle and Health", value: 189 },
  ];
  const dataPurcharses = [
    { total: "45.256", date: "24-01-2023" },
    { total: "45.256", date: "25-01-2023" },
    { total: "45.256", date: "26-01-2023" },
    { total: "45.256", date: "27-01-2023" },
    { total: "45.256", date: "28-01-2023" },
    { total: "45.256", date: "28-01-2023" },
    { total: "45.256", date: "28-01-2023" },
    { total: "45.256", date: "28-01-2023" },
    { total: "45.256", date: "28-01-2023" },
    { total: "45.256", date: "28-01-2023" },
    { total: "45.256", date: "28-01-2023" },
    { total: "45.256", date: "28-01-2023" },
    { total: "45.256", date: "28-01-2023" },
    { total: "45.256", date: "28-01-2023" },
  ];

  console.log(new Date().toLocaleDateString());
  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#8884d8",
    "#c30101",
  ];

  return (
    <Card className='main'>
      <CardHeader title='Welcome to the administration' />

      <img src='https://res.cloudinary.com/dg1roy34p/image/upload/v1674830963/SmartNest/logo_smart_b130x90_k1idwg.png'></img>
      <CardContent className='dashboardAdmin_wrapper'>
        <Card variant='outlined' className='dashboardAdmin_card'>
          <div className='dashboardAdmin_icon'>
            <UserIcon />
          </div>
          <h2>Users registered</h2>
          <p>{usersCount}</p>
        </Card>

        <Card variant='outlined' className='dashboardAdmin_card'>
          <div className='dashboardAdmin_icon'>
            <LocalGroceryStoreIcon />
          </div>
          <h2>Products</h2>
          <p> {productsCount}</p>
        </Card>

        <Card variant='outlined' className='dashboardAdmin_card'>
          <div className='dashboardAdmin_icon'>
            <PaidIcon />
          </div>
          <h2>Purchases</h2>
          <p>{purchasesCount}</p>
        </Card>
      </CardContent>

      <PieChart width={600} height={400}>
        <Pie
          data={CategoryQuantity}
          cx={200}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill='#8884d8'
          dataKey='quantity'
        >
          {CategoryQuantity.map((entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend align='right' layout='vertical' verticalAlign='middle' />
      </PieChart>

      <ComposedChart width={800} height={400} data={data}>
        <XAxis dataKey='fecha' />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid stroke='#f5f5f5' />
        <Bar dataKey='price' barSize={20} fill='#413ea0' />
      </ComposedChart>

      <AreaChart
        width={800}
        height={400}
        data={data2}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
        <Area type='monotone' dataKey='uv' stroke='#8884d8' fill='#8884d8' />
      </AreaChart>
    </Card>
  );
};
