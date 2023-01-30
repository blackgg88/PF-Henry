import { API_URL } from '../../config'



interface User {
    posts: any[];
    role: string;
    _id: string;
    connection: string;
    client_id: string;
    email: string;
    password: string;
    tenant: string;
    transaction: {
    id: string;
    ale: string;
    protocol: string;
    requested_scopes: string[];
    acr_values: any[];
    ui_locales: any[];
    redirect_uri: string;
    prompt: any[];
    state: string;
    login_hint: any;
    response_mode: string;
    response_type: string[];
    };
    request_language: string;
    email_verified: boolean;
    }
    
    export const user: User = {
    posts: [],
    role: "user",
    _id: "63cf5ae4fe80740012f67b62",
    connection: "eCommerce",
    client_id: "2rlz5Jb0snWMf4Zj6DsHi4mHeDguREtP",
    email: "quantrell.keene@foundtoo.com",
    password: "$2b$10$xGNQ0fyjVEYl2FX7N4Cbh.ceoUfk7C0xRzXo5efNSQQLvpYWFgRtO",
    tenant: "dev-ofbihxhi1ivqz16i",
    transaction: {
    id: "dm74c758EzyIrRQ2seF2e-3eDYZA0bXf",
    ale: " es",
    protocol: "oidc-basic-profile",
    requested_scopes: [
    "openid",
    "profile",
    "email"
    ],
    acr_values: [],
    ui_locales: [],
    redirect_uri: "http://localhost:5173",
    prompt: [],
    state: "T0xWcGdodmRlVXNZMVFMdm1rVDdBeUI3dnlQZksxQS1HUX5ybWdCeG1aYQ==",
    login_hint: null,
    response_mode: "query",
    response_type: [
    "code"
    ]
    },
    request_language: "es-ES,es;q=0.9",
    email_verified: false
    };