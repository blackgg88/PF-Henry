import { Response } from 'express';
import nodemailer from 'nodemailer';
import { ADMIN_EMAIL, GMAIL_API } from '../../config';
import { Payment } from '../controllers/mercadopago/feedback';
import { Products } from '../controllers/mercadopago/feedback';

// export const transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 465,
//   secure: true, // true for 465, false for other ports
//   auth: {
//     user: `${ADMIN_EMAIL}`, // generated ethereal user
//     pass: `${GMAIL_API}`, // generated ethereal password
//   },
// });

// transporter.verify().then(() => {
//   console.log("listo para mandar emails");
// });

const formatDate = (date: string) => {
  const date_time_obj = new Date(date);
  const day = date_time_obj.getDate();
  const month = date_time_obj.getMonth() + 1;
  const year = date_time_obj.getFullYear();
  const formatted_date = day + '/' + month + '/' + year;

  return formatted_date;
};

export const sendMailPayment = (payment: Payment) => {
  let res: Response;
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
      user: `${ADMIN_EMAIL}`, // generated ethereal user
      pass: `${GMAIL_API}`, // generated ethereal password
    },
  });

  function renderItems(items: Products[]) {
    let html = '';
    for (const item of items) {
      html += `
      <tr>
      <td class="esd-structure es-p20t es-p20r es-p20l esdev-adapt-off" align="left" esd-custom-block-id="731032" esdev-config="h1">
          <table width="560" cellpadding="0" cellspacing="0" class="esdev-mso-table">
              <tbody>
               <td width="125" class="esd-container-frame" align="left">
                  <tr>
                      <td class="esdev-mso-td" valign="top">
                          <table cellpadding="0" cellspacing="0" class="es-left" align="left">
                              <tbody>
                                  <tr>
                                      <td width="125" class="esd-container-frame" align="left">
                                          <table cellpadding="0" cellspacing="0" width="100%">
                                              <tbody>
                                                  <tr>
                                                      <td align="center" class="esd-block-image" style="font-size: 0px;"><a target="_blank"><img class="adapt-img p_image" src=${
                                                        item.picture_url
                                                      } alt=${
        item.title
      } style="display: block;" width="125" title=${item.title}></a></td>
                                                  </tr>
                                              </tbody>
                                          </table>
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                      </td>
                      <td width="20"></td>
                      <td class="esdev-mso-td" valign="top">
                          <table cellpadding="0" cellspacing="0" class="es-left" align="left">
                              <tbody>
                                  <tr>
                                      <td width="125" align="left" class="esd-container-frame">
                                          <table cellpadding="0" cellspacing="0" width="100%">
                                              <tbody>
                                                  <tr>
                                                      <td align="left" class="esd-block-text es-p20t es-p20b es-m-p0t es-m-p0b es-m-txt-l">
                                                          <h3><strong class="p_name">${
                                                            item.title
                                                          }</strong></h3>
                                                      </td>
                                                  </tr>
                                              </tbody>
                                          </table>
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                      </td>
                      <td width="20"></td>
                      <td class="esdev-mso-td" valign="top">
                          <table cellpadding="0" cellspacing="0" class="es-left" align="left">
                              <tbody>
                                  <tr>
                                      <td width="176" align="left" class="esd-container-frame">
                                          <table cellpadding="0" cellspacing="0" width="100%">
                                              <tbody>
                                                  <tr>
                                                      <td align="right" class="esd-block-text es-p20t es-p20b es-m-p0t es-m-p0b">
                                                          <p style="color: #666666;" class="p_description">${
                                                            item.quantity
                                                          }</p>
                                                      </td>
                                                  </tr>
                                              </tbody>
                                          </table>
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                      </td>
                      <td width="20"></td>
                      <td class="esdev-mso-td" valign="top">
                          <table cellpadding="0" cellspacing="0" class="es-right" align="right">
                              <tbody>
                                  <tr>
                                      <td width="74" align="left" class="esd-container-frame">
                                          <table cellpadding="0" cellspacing="0" width="100%">
                                              <tbody>
                                                  <tr>
                                                      <td align="right" class="esd-block-text es-p20t es-p20b es-m-p0t es-m-p0b">
                                                          <p class="p_price">$${(
                                                            Number(item.unit_price) *
                                                            Number(item.quantity)
                                                          ).toFixed(2)} USD</p>
                                                      </td>
                                                  </tr>
                                              </tbody>
                                          </table>
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                      </td>
                  </tr>
              </tbody>
          </table>
      </td>
  </tr>
  <br>
        `;
    }
    return html;
  }

  let mailOptions = {
    from: `${ADMIN_EMAIL}`,
    to: payment.email,
    subject: `Payment ${payment.status} SmartNest`,
    html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
    
    <head>
        <meta charset="UTF-8">
        <meta content="width=device-width, initial-scale=1" name="viewport">
        <meta name="x-apple-disable-message-reformatting">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta content="telephone=no" name="format-detection">
        <title></title>
        <!--[if (mso 16)]>
        <style type="text/css">
        a {text-decoration: none;}
        </style>
        <![endif]-->
        <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]-->
        <!--[if gte mso 9]>
    <xml>
        <o:OfficeDocumentSettings>
        <o:AllowPNG></o:AllowPNG>
        <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->
    </head>
    
    <style>
        /* CONFIG STYLES Please do not delete and edit CSS styles below */
    /* IMPORTANT THIS STYLES MUST BE ON FINAL EMAIL */
    #outlook a {
        padding: 0;
    }
    
    .es-button {
        mso-style-priority: 100 !important;
        text-decoration: none !important;
    }
    
    a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
    }
    
    .es-desk-hidden {
        display: none;
        float: left;
        overflow: hidden;
        width: 0;
        max-height: 0;
        line-height: 0;
        mso-hide: all;
    }
    
    [data-ogsb] .es-button {
        border-width: 0 !important;
        padding: 10px 20px 10px 20px !important;
    }
    
    /*
    END OF IMPORTANT
    */
    body {
        width: 100%;
        font-family: arial, 'helvetica neue', helvetica, sans-serif;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
    }
    
    table {
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
        border-collapse: collapse;
        border-spacing: 0px;
    }
    
    table td,
    body,
    .es-wrapper {
        padding: 0;
        Margin: 0;
    }
    
    .es-content,
    .es-header,
    .es-footer {
        table-layout: fixed !important;
        width: 100%;
    }
    
    img {
        display: block;
        border: 0;
        outline: none;
        text-decoration: none;
        -ms-interpolation-mode: bicubic;
    }
    
    p,
    hr {
        Margin: 0;
    }
    
    h1,
    h2,
    h3,
    h4,
    h5 {
        Margin: 0;
        line-height: 120%;
        mso-line-height-rule: exactly;
        font-family: arial, 'helvetica neue', helvetica, sans-serif;
    }
    
    p,
    ul li,
    ol li,
    a {
        -webkit-text-size-adjust: none;
        -ms-text-size-adjust: none;
        mso-line-height-rule: exactly;
    }
    
    .es-left {
        float: left;
    }
    
    .es-right {
        float: right;
    }
    
    .es-p5 {
        padding: 5px;
    }
    
    .es-p5t {
        padding-top: 5px;
    }
    
    .es-p5b {
        padding-bottom: 5px;
    }
    
    .es-p5l {
        padding-left: 5px;
    }
    
    .es-p5r {
        padding-right: 5px;
    }
    
    .es-p10 {
        padding: 10px;
    }
    
    .es-p10t {
        padding-top: 10px;
    }
    
    .es-p10b {
        padding-bottom: 10px;
    }
    
    .es-p10l {
        padding-left: 10px;
    }
    
    .es-p10r {
        padding-right: 10px;
    }
    
    .es-p15 {
        padding: 15px;
    }
    
    .es-p15t {
        padding-top: 15px;
    }
    
    .es-p15b {
        padding-bottom: 15px;
    }
    
    .es-p15l {
        padding-left: 15px;
    }
    
    .es-p15r {
        padding-right: 15px;
    }
    
    .es-p20 {
        padding: 20px;
    }
    
    .es-p20t {
        padding-top: 20px;
    }
    
    .es-p20b {
        padding-bottom: 20px;
    }
    
    .es-p20l {
        padding-left: 20px;
    }
    
    .es-p20r {
        padding-right: 20px;
    }
    
    .es-p25 {
        padding: 25px;
    }
    
    .es-p25t {
        padding-top: 25px;
    }
    
    .es-p25b {
        padding-bottom: 25px;
    }
    
    .es-p25l {
        padding-left: 25px;
    }
    
    .es-p25r {
        padding-right: 25px;
    }
    
    .es-p30 {
        padding: 30px;
    }
    
    .es-p30t {
        padding-top: 30px;
    }
    
    .es-p30b {
        padding-bottom: 30px;
    }
    
    .es-p30l {
        padding-left: 30px;
    }
    
    .es-p30r {
        padding-right: 30px;
    }
    
    .es-p35 {
        padding: 35px;
    }
    
    .es-p35t {
        padding-top: 35px;
    }
    
    .es-p35b {
        padding-bottom: 35px;
    }
    
    .es-p35l {
        padding-left: 35px;
    }
    
    .es-p35r {
        padding-right: 35px;
    }
    
    .es-p40 {
        padding: 40px;
    }
    
    .es-p40t {
        padding-top: 40px;
    }
    
    .es-p40b {
        padding-bottom: 40px;
    }
    
    .es-p40l {
        padding-left: 40px;
    }
    
    .es-p40r {
        padding-right: 40px;
    }
    
    .es-menu td {
        border: 0;
    }
    
    .es-menu td a img {
        display: inline-block !important;
        vertical-align: middle;
    }
    
    /*
    END CONFIG STYLES
    */
    s {
        text-decoration: line-through;
    }
    
    p,
    ul li,
    ol li {
        font-family: arial, 'helvetica neue', helvetica, sans-serif;
        line-height: 150%;
    }
    
    ul li,
    ol li {
        Margin-bottom: 15px;
        margin-left: 0;
    }
    
    a {
        text-decoration: underline;
    }
    
    .es-menu td a {
        text-decoration: none;
        display: block;
        font-family: arial, 'helvetica neue', helvetica, sans-serif;
    }
    
    .es-wrapper {
        width: 100%;
        height: 100%;
        background-repeat: repeat;
        background-position: center top;
    }
    
    .es-wrapper-color,
    .es-wrapper {
        background-color: #ffffff;
    }
    
    .es-header {
        background-color: transparent;
        background-repeat: repeat;
        background-position: center top;
    }
    
    .es-header-body {
        background-color: #ffffff;
    }
    
    .es-header-body p,
    .es-header-body ul li,
    .es-header-body ol li {
        color: #666666;
        font-size: 14px;
    }
    
    .es-header-body a {
        color: #926B4A;
        font-size: 14px;
    }
    
    .es-content-body {
        background-color: #ffffff;
    }
    
    .es-content-body p,
    .es-content-body ul li,
    .es-content-body ol li {
        color: #666666;
        font-size: 14px;
    }
    
    .es-content-body a {
        color: #926B4A;
        font-size: 14px;
    }
    
    .es-footer {
        background-color: #e3cdc1;
        background-repeat: repeat;
        background-position: center top;
    }
    
    .es-footer-body {
        background-color: #e3cdc1;
    }
    
    .es-footer-body p,
    .es-footer-body ul li,
    .es-footer-body ol li {
        color: #666666;
        font-size: 14px;
    }
    
    .es-footer-body a {
        color: #926B4A;
        font-size: 14px;
    }
    
    .es-infoblock,
    .es-infoblock p,
    .es-infoblock ul li,
    .es-infoblock ol li {
        line-height: 120%;
        font-size: 12px;
        color: #cccccc;
    }
    
    .es-infoblock a {
        font-size: 12px;
        color: #cccccc;
    }
    
    h1 {
        font-size: 30px;
        font-style: normal;
        font-weight: bold;
        color: #333333;
    }
    
    h2 {
        font-size: 24px;
        font-style: normal;
        font-weight: bold;
        color: #333333;
    }
    
    h3 {
        font-size: 20px;
        font-style: normal;
        font-weight: bold;
        color: #333333;
    }
    
    .es-header-body h1 a,
    .es-content-body h1 a,
    .es-footer-body h1 a {
        font-size: 30px;
    }
    
    .es-header-body h2 a,
    .es-content-body h2 a,
    .es-footer-body h2 a {
        font-size: 24px;
    }
    
    .es-header-body h3 a,
    .es-content-body h3 a,
    .es-footer-body h3 a {
        font-size: 20px;
    }
    
    a.es-button,
    button.es-button {
        border-style: solid;
        border-color: #666666;
        border-width: 10px 20px 10px 20px;
        display: inline-block;
        background: #666666;
        border-radius: 30px;
        font-size: 18px;
        font-family: arial, 'helvetica neue', helvetica, sans-serif;
        font-weight: normal;
        font-style: normal;
        line-height: 120%;
        color: #ffffff;
        text-decoration: none;
        width: auto;
        text-align: center;
    }
    
    .es-button-border {
        border-style: solid solid solid solid;
        border-color: #2cb543 #2cb543 #2cb543 #2cb543;
        background: #666666;
        border-width: 0px 0px 0px 0px;
        display: inline-block;
        border-radius: 30px;
        width: auto;
    }
    
    /* RESPONSIVE STYLES Please do not delete and edit CSS styles below. If you don't need responsive layout, please delete this section. */
    @media only screen and (max-width: 600px) {
    
        p,
        ul li,
        ol li,
        a {
            line-height: 150% !important;
        }
    
        h1,
        h2,
        h3,
        h1 a,
        h2 a,
        h3 a {
            line-height: 120%;
        }
    
        h1 {
            font-size: 30px !important;
            text-align: center;
        }
    
        h2 {
            font-size: 26px !important;
            text-align: center;
        }
    
        h3 {
            font-size: 20px !important;
            text-align: center;
        }
    
        .es-header-body h1 a,
        .es-content-body h1 a,
        .es-footer-body h1 a {
            font-size: 30px !important;
        }
    
        .es-header-body h2 a,
        .es-content-body h2 a,
        .es-footer-body h2 a {
            font-size: 26px !important;
        }
    
        .es-header-body h3 a,
        .es-content-body h3 a,
        .es-footer-body h3 a {
            font-size: 20px !important;
        }
    
        .es-menu td a {
            font-size: 12px !important;
        }
    
        .es-header-body p,
        .es-header-body ul li,
        .es-header-body ol li,
        .es-header-body a {
            font-size: 14px !important;
        }
    
        .es-content-body p,
        .es-content-body ul li,
        .es-content-body ol li,
        .es-content-body a {
            font-size: 14px !important;
        }
    
        .es-footer-body p,
        .es-footer-body ul li,
        .es-footer-body ol li,
        .es-footer-body a {
            font-size: 14px !important;
        }
    
        .es-infoblock p,
        .es-infoblock ul li,
        .es-infoblock ol li,
        .es-infoblock a {
            font-size: 12px !important;
        }
    
        *[class="gmail-fix"] {
            display: none !important;
        }
    
        .es-m-txt-c,
        .es-m-txt-c h1,
        .es-m-txt-c h2,
        .es-m-txt-c h3 {
            text-align: center !important;
        }
    
        .es-m-txt-r,
        .es-m-txt-r h1,
        .es-m-txt-r h2,
        .es-m-txt-r h3 {
            text-align: right !important;
        }
    
        .es-m-txt-l,
        .es-m-txt-l h1,
        .es-m-txt-l h2,
        .es-m-txt-l h3 {
            text-align: left !important;
        }
    
        .es-m-txt-r img,
        .es-m-txt-c img,
        .es-m-txt-l img {
            display: inline !important;
        }
    
        .es-button-border {
            display: block !important;
        }
    
        a.es-button,
        button.es-button {
            font-size: 20px !important;
            display: block !important;
            border-left-width: 0px !important;
            border-right-width: 0px !important;
        }
    
        .es-adaptive table,
        .es-left,
        .es-right {
            width: 100% !important;
        }
    
        .es-content table,
        .es-header table,
        .es-footer table,
        .es-content,
        .es-footer,
        .es-header {
            width: 100% !important;
            max-width: 600px !important;
        }
    
        .es-adapt-td {
            display: block !important;
            width: 100% !important;
        }
    
        .adapt-img {
            width: 100% !important;
            height: auto !important;
        }
    
        .es-m-p0 {
            padding: 0 !important;
        }
    
        .es-m-p0r {
            padding-right: 0 !important;
        }
    
        .es-m-p0l {
            padding-left: 0 !important;
        }
    
        .es-m-p0t {
            padding-top: 0 !important;
        }
    
        .es-m-p0b {
            padding-bottom: 0 !important;
        }
    
        .es-m-p20b {
            padding-bottom: 20px !important;
        }
    
        .es-mobile-hidden,
        .es-hidden {
            display: none !important;
        }
    
        tr.es-desk-hidden,
        td.es-desk-hidden,
        table.es-desk-hidden {
            width: auto !important;
            overflow: visible !important;
            float: none !important;
            max-height: inherit !important;
            line-height: inherit !important;
        }
    
        tr.es-desk-hidden {
            display: table-row !important;
        }
    
        table.es-desk-hidden {
            display: table !important;
        }
    
        td.es-desk-menu-hidden {
            display: table-cell !important;
        }
    
        .es-menu td {
            width: 1% !important;
        }
    
        table.es-table-not-adapt,
        .esd-block-html table {
            width: auto !important;
        }
    
        table.es-social {
            display: inline-block !important;
        }
    
        table.es-social td {
            display: inline-block !important;
        }
    
        .es-m-p5 {
            padding: 5px !important;
        }
    
        .es-m-p5t {
            padding-top: 5px !important;
        }
    
        .es-m-p5b {
            padding-bottom: 5px !important;
        }
    
        .es-m-p5r {
            padding-right: 5px !important;
        }
    
        .es-m-p5l {
            padding-left: 5px !important;
        }
    
        .es-m-p10 {
            padding: 10px !important;
        }
    
        .es-m-p10t {
            padding-top: 10px !important;
        }
    
        .es-m-p10b {
            padding-bottom: 10px !important;
        }
    
        .es-m-p10r {
            padding-right: 10px !important;
        }
    
        .es-m-p10l {
            padding-left: 10px !important;
        }
    
        .es-m-p15 {
            padding: 15px !important;
        }
    
        .es-m-p15t {
            padding-top: 15px !important;
        }
    
        .es-m-p15b {
            padding-bottom: 15px !important;
        }
    
        .es-m-p15r {
            padding-right: 15px !important;
        }
    
        .es-m-p15l {
            padding-left: 15px !important;
        }
    
        .es-m-p20 {
            padding: 20px !important;
        }
    
        .es-m-p20t {
            padding-top: 20px !important;
        }
    
        .es-m-p20r {
            padding-right: 20px !important;
        }
    
        .es-m-p20l {
            padding-left: 20px !important;
        }
    
        .es-m-p25 {
            padding: 25px !important;
        }
    
        .es-m-p25t {
            padding-top: 25px !important;
        }
    
        .es-m-p25b {
            padding-bottom: 25px !important;
        }
    
        .es-m-p25r {
            padding-right: 25px !important;
        }
    
        .es-m-p25l {
            padding-left: 25px !important;
        }
    
        .es-m-p30 {
            padding: 30px !important;
        }
    
        .es-m-p30t {
            padding-top: 30px !important;
        }
    
        .es-m-p30b {
            padding-bottom: 30px !important;
        }
    
        .es-m-p30r {
            padding-right: 30px !important;
        }
    
        .es-m-p30l {
            padding-left: 30px !important;
        }
    
        .es-m-p35 {
            padding: 35px !important;
        }
    
        .es-m-p35t {
            padding-top: 35px !important;
        }
    
        .es-m-p35b {
            padding-bottom: 35px !important;
        }
    
        .es-m-p35r {
            padding-right: 35px !important;
        }
    
        .es-m-p35l {
            padding-left: 35px !important;
        }
    
        .es-m-p40 {
            padding: 40px !important;
        }
    
        .es-m-p40t {
            padding-top: 40px !important;
        }
    
        .es-m-p40b {
            padding-bottom: 40px !important;
        }
    
        .es-m-p40r {
            padding-right: 40px !important;
        }
    
        .es-m-p40l {
            padding-left: 40px !important;
        }
    
        .es-desk-hidden {
            display: table-row !important;
            width: auto !important;
            overflow: visible !important;
            max-height: inherit !important;
        }
    }
    
    </style>
    
    <body>
        <div class="es-wrapper-color">
            <!--[if gte mso 9]>
          <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
            <v:fill type="tile" color="#ffffff"></v:fill>
          </v:background>
        <![endif]-->
            <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0">
                <tbody>
                    <tr>
                        <td class="esd-email-paddings" valign="top">
                            <table cellpadding="0" cellspacing="0" class="esd-header-popover es-header" align="center">
                                <tbody>
                                    <tr>
                                        <td class="esd-stripe" align="center">
                                            <table bgcolor="#fff" class="es-header-body" align="center" cellpadding="0" cellspacing="0" width="600" style="background-color: #ffffff;">
                                                <tbody>
                                                    <tr>
                                                        <td class="esd-structure esdev-adapt-off es-p20" align="left">
                                                            <table width="560" cellpadding="0" cellspacing="0" class="esdev-mso-table">
                                                                <tbody>
                                                                    <tr>
                                                                        <td class="esdev-mso-td" valign="top">
                                                                            <table cellpadding="0" cellspacing="0" class="es-left" align="left">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td width="415" class="es-m-p0r esd-container-frame" valign="top" align="center">
                                                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                                                <tbody>
                                                                                                    <tr>
                                                                                                        <td align="left" class="esd-block-image es-p5" style="font-size: 0px;"><a target="_blank" href><img src="https://res.cloudinary.com/dg1roy34p/image/upload/v1674828268/SmartNest/logo_smart_b_xxdxi8.png" alt="Logo" style="display: block; font-size: 12px;" width="185" title="Logo"></a></td>
                                                                                                    </tr>
                                                                                                </tbody>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                        <td width="20"></td>
                                                                        <td class="esdev-mso-td" valign="top">
                                                                            <table cellpadding="0" cellspacing="0" align="right">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td width="125" align="left" class="esd-container-frame">
                                                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                                                <tbody>
                                                                                                    <tr>
                                                                                                        <td align="center" class="esd-block-image" style="font-size: 0px;"><a target="_blank" href="https://mercadopago.com"><img class="adapt-img" src="https://chida.tur.ar/wp-content/uploads/2020/01/MERCADOPAGO.png" alt="mercadopago-logo" style="display: block;" width="125" title="mercadopago-logo"></a></td>
                                                                                                    </tr>
                                                                                                </tbody>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="esd-structure es-p20t es-p20r es-p20l" align="left">
                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                <tbody>
                                                                    <tr>
                                                                        <td width="560" class="esd-container-frame" align="center" valign="top">
                                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-text">
                                                                                            <h1>Your order is on its way!</h1>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-text es-p5t es-p5b">
                                                                                            <p>Your order has shipped. Here's some information on when to expect your package and how to track it along the way.</p>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table cellpadding="0" cellspacing="0" class="es-content" align="center">
                                <tbody>
                                    <tr>
                                        <td class="esd-stripe" align="center">
                                            <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600">
                                                <tbody>
                                                    <tr>
                                                        <td class="esd-structure es-p20t es-p20r es-p20l" align="left">
                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                <tbody>
                                                                    <tr>
                                                                        <td width="560" class="esd-container-frame" align="center" valign="top">
                                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-text">
                                                                                            <h2 style="line-height: 150%;">ORDER # ${
                                                                                              payment.id
                                                                                            }</h2>
                                                                                            <p style="line-height: 150%;">${formatDate(
                                                                                              payment.date,
                                                                                            )}</p>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td align="left" class="esd-block-text es-m-txt-c es-p20t">
                                                                                            <p style="color: #a0937d;">ITEMS ORDERED</p>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-spacer es-p5t es-p5b" style="font-size:0">
                                                                                            <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0">
                                                                                                <tbody>
                                                                                                    <tr>
                                                                                                        <td style="border-bottom: 1px solid #a0937d; background: none; height: 1px; width: 100%; margin: 0px;"></td>
                                                                                                    </tr>
                                                                                                </tbody>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <br>

                                                        ${renderItems(payment.products)}

                                                    <tr>
                                                        <td class="esd-structure es-p20r es-p20l" align="left">
                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                <tbody>
                                                                    <tr>
                                                                        <td width="560" class="esd-container-frame" align="center" valign="top">
                                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-spacer es-p5t es-p5b" style="font-size:0">
                                                                                            <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0">
                                                                                                <tbody>
                                                                                                    <tr>
                                                                                                        <td style="border-bottom: 1px solid #a0937d; background: none; height: 1px; width: 100%; margin: 0px;"></td>
                                                                                                    </tr>
                                                                                                </tbody>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="esd-structure es-p20r es-p20l esdev-adapt-off" align="left">
                                                            <table width="560" cellpadding="0" cellspacing="0" class="esdev-mso-table">
                                                                <tbody>
                                                                    <tr>
                                                                        <td class="esdev-mso-td" valign="top">
                                                                            <table cellpadding="0" cellspacing="0" class="es-left" align="left">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td width="466" class="esd-container-frame" align="left">
                                                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                                                <tbody>
                                                                                                    <tr>
                                                                                                        <td align="right" class="esd-block-text">
                                                                                                            <p><b>Total</b></p>
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                </tbody>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                        <td width="20"></td>
                                                                        <td class="esdev-mso-td" valign="top">
                                                                            <table cellpadding="0" cellspacing="0" class="es-right" align="right">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td width="74" align="left" class="esd-container-frame">
                                                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                                                <tbody>
                                                                                                    <tr>
                                                                                                        <td align="right" class="esd-block-text">
                                                                                                            <p><strong>$${payment.total_amount.toFixed(
                                                                                                              2,
                                                                                                            )}.</strong></p>
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                </tbody>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="esd-structure es-p20t es-p20r es-p20l" align="left">
                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                <tbody>
                                                                    <tr>
                                                                        <td width="560" class="esd-container-frame" align="center" valign="top">
                                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td align="left" class="esd-block-text es-m-txt-c es-p20t">
                                                                                            <p style="color: #a0937d;">SHIPPING ADDRESS</p>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-spacer es-p5t es-p5b" style="font-size:0">
                                                                                            <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0">
                                                                                                <tbody>
                                                                                                    <tr>
                                                                                                        <td style="border-bottom: 1px solid #a0937d; background: none; height: 1px; width: 100%; margin: 0px;"></td>
                                                                                                    </tr>
                                                                                                </tbody>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td align="left" class="esd-block-text">
                                                                                            <p><span>${
                                                                                              payment.name
                                                                                            }</span><br>${
      payment.address.street_name
    } ${payment.address.street_number}<br>${payment.address.zip_code}</p>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table cellpadding="0" cellspacing="0" class="es-content" align="center">
                                <tbody>
                                    <tr>
                                        <td class="esd-stripe" align="center" bgcolor="#142142" style="background-color: #142142;">
                                            <table bgcolor="#142142" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600" style="background-color: #142142;">
                                                <tbody>
                                                    <tr>
                                                        <td class="esd-structure es-p15t es-p15b es-p20r es-p20l es-m-p10r es-m-p10l" align="left">
                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                <tbody>
                                                                    <tr>
                                                                        <td width="560" class="esd-container-frame" align="center" valign="top">
                                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td class="esd-block-menu" esd-tmp-menu-color="#a0937d" esd-tmp-divider="1|solid|#a0937d" esd-tmp-menu-size="width|25">
                                                                                            <table cellpadding="0" cellspacing="0" width="100%" class="es-menu">
                                                                                                <tbody>
                                                                                                    <tr class="links-images-left">
                                                                                                        <td align="center" valign="top" width="33.33%" class="es-p10t es-p10b es-p5r es-p5l"><a target="_blank" style="color: #a0937d;"><img src="https://tlr.stripocdn.email/content/guids/CABINET_455a2507bd277c27cf7436f66c6b427c/images/58991620296762845.png" alt="FREE DELIVERY" title="FREE DELIVERY" align="absmiddle" class="es-p15r" width="25">FREE DELIVERY</a></td>
                                                                                                        <td align="center" valign="top" width="33.33%" class="es-p10t es-p10b es-p5r es-p5l" style="border-left: 1px solid #a0937d;"><a target="_blank" style="color: #a0937d;"><img src="https://tlr.stripocdn.email/content/guids/CABINET_455a2507bd277c27cf7436f66c6b427c/images/55781620296763104.png" alt="HIGH QUALITY" title="HIGH QUALITY" align="absmiddle" class="es-p15r" width="25">HIGH QUALITY</a></td>
                                                                                                        <td align="center" valign="top" width="33.33%" class="es-p10t es-p10b es-p5r es-p5l" style="border-left: 1px solid #a0937d;"><a target="_blank" style="color: #a0937d;"><img src="https://tlr.stripocdn.email/content/guids/CABINET_455a2507bd277c27cf7436f66c6b427c/images/88291620296763036.png" alt="BEST CHOICE" title="BEST CHOICE" align="absmiddle" class="es-p15r" width="25">BEST CHOICE</a></td>
                                                                                                    </tr>
                                                                                                </tbody>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table cellpadding="0" cellspacing="0" class="es-footer esd-footer-popover" align="center">
                                <tbody>
                                    <tr>
                                        <td class="esd-stripe" align="center" esd-custom-block-id="343277" bgcolor="#ffffff" style="background-color: #ffffff;">
                                            <table class="es-footer-body" align="center" cellpadding="0" cellspacing="0" width="600" style="background-color: transparent;">
                                                <tbody>
                                                    <tr>
                                                        <td class="esd-structure es-p30t es-p30b es-p20r es-p20l" align="left">
                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                <tbody>
                                                                    <tr>
                                                                        <td width="560" class="esd-container-frame" align="left">
                                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td class="esd-block-menu" esd-tmp-menu-padding="10|10" esd-tmp-menu-color="#666666" esd-tmp-divider="0|solid|#a0937d">
                                                                                            <table cellpadding="0" cellspacing="0" width="100%" class="es-menu">
                                                                                                <tbody>
                                                                                                    <tr class="links">
                                                                                                        <td align="center" valign="top" width="25%" class="es-p10t es-p10b es-p5r es-p5l" style="padding-bottom: 10px;"><a target="_blank" style="color: #666666;">About us</a></td>
                                                                                                        <td align="center" valign="top" width="25%" class="es-p10t es-p10b es-p5r es-p5l" style="padding-bottom: 10px;"><a target="_blank" style="color: #666666;">News</a></td>
                                                                                                        <td align="center" valign="top" width="25%" class="es-p10t es-p10b es-p5r es-p5l" style="padding-bottom: 10px;"><a target="_blank" style="color: #666666;">Forum</a></td>
                                                                                                        <td align="center" valign="top" width="25%" class="es-p10t es-p10b es-p5r es-p5l" style="padding-bottom: 10px;"><a target="_blank" style="color: #666666;">The shops</a></td>
                                                                                                    </tr>
                                                                                                </tbody>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-text es-p10t es-p10b" esd-links-color="#a0937d">
                                                                                            <p style="font-size: 12px; color: #666666;">You are receiving this email because you have visited our site or asked us about the regular newsletter. Make sure our messages get to your Inbox (and not your bulk or junk folders).<br><a target="_blank" style="font-size: 12px; color: #a0937d;" href="https://viewstripo.email">Privacy policy</a> | <a target="_blank" style="font-size: 12px; color: #a0937d;">Unsubscribe</a></p>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="esd-structure es-p20" align="left">
                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                <tbody>
                                                                    <tr>
                                                                        <td width="560" class="esd-container-frame" align="center" valign="top">
                                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                                <tbody>
                                                                                    <tr>/
                                                                                    
                                                                                        <td align="center" class="esd-block-image es-infoblock made_with" style="font-size:0"><a target="_blank" href="https://res.cloudinary.com/dg1roy34p/image/upload/v1674829517/logo_smart_b130x90_eoojiq.png"><img src="https://dev--henry-pf-smartnest.netlify.app" alt width="125" style="display: block;"></a></td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </body>
    
    </html>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res?.status(500).send(error?.message);
    } else {
      res?.status(200).send('Email sent');
    }
  });
};
