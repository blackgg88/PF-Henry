import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { controllerUser } from './controller';
import { useAppSelector } from '../../Redux/hook';
import { userInterface } from '../../Redux/slice/user/user.slice';
import verified_true from '../../assets/verified/verified_true.png';
import verified_false from '../../assets/verified/verified_false.png';
import ModalUser from '../modalUser/ModalUser';
import FavoritesModal from './FavoritesModal';

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
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openFavo, setOpenFavo] = useState<boolean>(false);

  const userByBd: userInterface = useAppSelector((state) => state.userReducer.userState);

  const email = userByBd.email;
  const verified = userByBd.email_verified;

  useEffect(() => {
    const handleGetItems = async () => {
      const response = await controllerUser(email);
      setPurchase(response);
    };
    if (isAuthenticated) {
      handleGetItems();
    }
  }, [isAuthenticated]);

  console.log(purchase);

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
    <div className='all' style={!purchase.length ? { height: '85vh' } : {}}>
      <div className='dash_profileContainer'>
        <div className='dash_profile_ImgSide'>
          <img src={userByBd.picture} alt='picture-profile' />
        </div>
        <div className='dash_profile_InfoSide'>
          <h2>{user?.name?.toUpperCase()}</h2>
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

      <div onClick={() => setOpenModal(!openModal)} className='dash_infouser_container'>
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

      <div onClick={() => setOpenFavo(!openFavo)} className='dash_infouser_container'>
        <div className='dash_infouser_title'>
          <img
            className='dash_infouser_imageMenu'
            src='https://icon-library.com/images/profile-png-icon/profile-png-icon-24.jpg'
            alt='profileInfo'
          />
          <h2>My Favorites</h2>
        </div>
        <p>Manage your products favorites</p>
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
                        {payment.items.map((item, index) => (
                          <li key={item.title + index}>{`${item.title.slice(0, 45)}   \nQuantity: ${
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
      {openModal && <ModalUser close={setOpenModal} userByBd={userByBd} />}
      {openFavo && (
        <FavoritesModal
          user_id={userByBd._id}
          closeModal={setOpenFavo}
          favorites={userByBd.favorites}
        />
      )}
      {/* Aqui */}
      {/* <div className='dash_purchaseDiv_Favorities'> favoritos</div> */}
    </div>
  );
};
