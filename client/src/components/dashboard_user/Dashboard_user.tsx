import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { controllerUser } from './controller';
import Navbar from '../navbar/Navbar';
import logo from '../../assets/logo_smart_b.png';
import verified_true from '../../assets/verified/verified_true.png';
import verified_false from '../../assets/verified/verified_false.png';
import ModalUser from '../modalUser/ModalUser';

// creame una interface para este estado const { purchase, setPurchase} = useState ([]) ;
interface Items {
  title: string;
  id: string;
  unit_price: number;
  quantity: number;
  picture_url: string;
  category_id: string;
}

interface Payments {
  date_created: string;
  id: string;
  items: Items[];
  status: string;
  status_detail: string;
  total_paid_amount: number;
}

export const Dashboard_user = () => {
  const { user, isAuthenticated } = useAuth0();
  const [purchase, setPurchase] = useState<Payments[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false)
  //purchase [{}, {}]

  //const email = 'Humberto@gmail.com';

  const email = user?.email;
  const verified = user?.email_verified;

  useEffect(() => {
    const handleGetItems = async () => {
      const response = await controllerUser(email);
      console.log(response); //array de dos elementos
      setPurchase(response);
    };
    if (isAuthenticated) {
      handleGetItems();
    }
  }, [isAuthenticated]);
  {
    console.log(user);
  }

  const handleProducts = (items: Items[]) => {
    const itemsNames = items.map(
      (item) => item.title.slice(0, 30) + ' X ' + item.quantity,
    );

    return itemsNames.join('\n');
  };

  const handleFormatedDate = (date_created: string) => {
    const dateString = date_created;
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const formatedDate = `${day}-${month}-${year}`;

    return formatedDate;
  };

  return (
    <div className='all'>
      <div className='dash_profileContainer'>
        <div className='dash_profile_ImgSide'>
          <img src={user?.picture} alt='picture-profile' />
        </div>
        <div className='dash_profile_InfoSide'>
          <h2>{user?.name}</h2>
          <p>{email}</p>
          <p>
            {verified ? (
              <img src={verified_true} alt='verified_true' />
            ) : (
              <img src={verified_false} alt='verified_false' />
            )}
          </p>
          {
            <p>
              {!verified ? (
                <div>
                  <span>Check your email and verify your account</span>
                </div>
              ) : null}
            </p>
          }
        </div>
      </div>

      <div onClick={()=> setOpenModal(!openModal)} className='dash_infouser_container'>
        <div className='dash_infouser_title'>
          <img
            className='dash_infouser_imageMenu'
            src='https://icon-library.com/images/profile-png-icon/profile-png-icon-24.jpg'
            alt='profileInfo'
          />
          <h2>My Information</h2>
        </div>
        <p>Manage your personal data</p>
      </div>

      <div className='dash_purchaseDiv'>
        <div className='dash_purchaseTitleContainer'>
          <img
            className='dash_purchase_iconMenu'
            src='https://icon-library.com/images/purchase-icon-png/purchase-icon-png-8.jpg'
            alt='cartPurchase'
          />
          <h2>My shopping</h2>
        </div>

        {purchase.length ? (
          <div className='dash_Allpurchase_container'>
            {purchase.map((payment) => {
              return (
                <div className='dash_onePurchase' key={payment.id}>
                  <div className='dash_onePurchase_imageSide'>
                    <img
                      className='imagePurchase'
                      src={payment.items[0].picture_url}
                      alt='imgPurchase'
                    />
                  </div>
                  <div className='dash_onePurchase_infoSide'>
                    <h3>Items:</h3>
                    <div className='dash_onePurchase_infoItems'>
                      <ol>
                        {payment.items.map((item) => (
                          <li>{`${item.title.slice(0, 45)}   \nQuantity: ${
                            item.quantity
                          }`}</li>
                        ))}
                      </ol>
                    </div>
                    <div className='dash_onePurchase_PaymentInfo'>
                      <p>
                        Total: <span>${payment.total_paid_amount.toFixed(2)}</span>
                      </p>
                      <p>
                        <span>{handleFormatedDate(payment.date_created)}</span>
                      </p>
                      <p>
                        Status: <span> {payment.status}</span>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            <p>You have not made any purchases yet</p>
          </div>
        )}
      </div>
      {
        openModal&&<ModalUser close={setOpenModal} />
      }
    </div>
  );
};
