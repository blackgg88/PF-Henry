import { Card, CardContent, CardHeader } from "@mui/material";
import UserIcon from "@mui/icons-material/Group";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import PaidIcon from "@mui/icons-material/Paid";
import {
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
import { useDashboard } from "./hook/useDashboard";

export const Dashboard = () => {

  const [
    usersCount,
    productsCount,
    purchasesCount,
    CategoryQuantity,
    COLORS,
    payments,
  ]:any = useDashboard()
  

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
          {CategoryQuantity.map((entry:any, index:any) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend align='right' layout='vertical' verticalAlign='middle' />
      </PieChart>

      <ComposedChart width={800} height={400} data={payments}>
        <XAxis dataKey='date' />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid stroke='#f5f5f5' />
        <Bar dataKey='TotalSales' barSize={20} fill='#413ea0' />
      </ComposedChart>

      <AreaChart width={800} height={400} data={payments} margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray='8 8' />
        <XAxis dataKey='date' />
        <YAxis />
        <Tooltip />
        <Area type='monotone' dataKey='TotalCount' stroke='#8884d8' fill='#8884d8' />
      </AreaChart>
    </Card>
  );
};
