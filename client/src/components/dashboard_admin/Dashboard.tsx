import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Paper,
  Box,
} from "@mui/material";
import UserIcon from "@mui/icons-material/Group";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import PaidIcon from "@mui/icons-material/Paid";
import {
  LineChart,
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
} from "recharts";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import dataProvider from "./dataProvider.js";

export const Dashboard = () => {
  const [usersCount, setUsersCount] = useState(0);
  const [productsCount, setProductsCount] = useState(0);
  const [purchasesCount, setPurchasesCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      // const usersResponse = await dataProvider.getList('users');
      // const productsResponse = await dataProvider.getList('products');
      // const purchasesResponse = await dataProvider.getList('purchases');

      // setUsersCount(usersResponse.data.length);
      // setProductsCount(productsResponse.data.length);
      // setPurchasesCount(purchasesResponse.data.length);
      const dataUsers = await fetch("http://localhost:3001/users").then((res) =>
        res.json()
      );
      const dataProducts = await fetch("http://localhost:3001/products").then(
        (res) => res.json()
      );
      const dataPurchases = await fetch("http://localhost:3001/checkout").then(
        (res) => res.json()
      );

      // console.log(data.length);
      setUsersCount(dataUsers.length);
      setProductsCount(dataProducts.length);
      setPurchasesCount(dataPurchases.length);
    };

    fetchData();
  }, []);

  const data = [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
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
  ];
  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#8884d8",
    "#c30101",
  ];

  return (
    <Card className="main">
      <CardHeader title="Welcome to the administration" />

      <img src="https://res.cloudinary.com/dg1roy34p/image/upload/v1674830963/SmartNest/logo_smart_b130x90_k1idwg.png"></img>
      <CardContent className="dashboardAdmin_wrapper">
        
        <Card variant="outlined" className="dashboardAdmin_card">
          <div className="dashboardAdmin_icon">
            <UserIcon />
          </div>
          <h2>Users registered</h2>
          <p>{usersCount}</p>
        </Card>

        <Card variant="outlined" className="dashboardAdmin_card">
          <div className="dashboardAdmin_icon">
            <LocalGroceryStoreIcon />
          </div>
          <h2>Products</h2>
          <p> {productsCount}</p>
        </Card>

        <Card variant="outlined" className="dashboardAdmin_card">
          <div className="dashboardAdmin_icon">
            <PaidIcon />
          </div>
          <h2>Purchases</h2>
          <p>{purchasesCount}</p>
        </Card>
      </CardContent>

      <PieChart width={400} height={400}>
        <Pie
          data={dataCategories}
          cx={200}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {dataCategories.map((entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend align="right" layout="vertical" verticalAlign="middle" />
      </PieChart>

      <LineChart width={500} height={300} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
      </LineChart>

      <ComposedChart width={730} height={250} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid stroke="#f5f5f5" />
        <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
        <Bar dataKey="pv" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
      </ComposedChart>
    </Card>
  );
};
