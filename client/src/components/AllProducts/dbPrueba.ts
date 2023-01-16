import {CartAddState} from '../../Redux/slice/cart.slice'
import {CategoryEnum} from '../../../../api/src/models/Category'

export const dbPrueba: CartAddState[] = [
    {
        name: 'Logitech MK270 Keyboard and mouse',
        id: '01',
        brand: 'Logitech',
        description: 'Power through your workflow without missing a beat. MK270 is purpose-built for uninterrupted wireless connectivity, battery power and personal performance so you can focus on the task at hand instead of technical difficulties.',
        images: [
            'https://m.media-amazon.com/images/I/61pUul1oDlL._AC_SX679_.jpg',
            'https://m.media-amazon.com/images/I/71X4aSJLm5L._AC_SX679_.jpg',
            'https://m.media-amazon.com/images/I/61RWEZEg58L._AC_SX679_.jpg',
            'https://m.media-amazon.com/images/I/71ot6CNUr4L._AC_SX679_.jpg'
        ],
        price: 17.99,
        rating: 4.5,
        stock: 20,
        categories: ["Home Entertainment"]
    },
    {
        name: 'Auricular USB',
        id: '02',
        brand: 'Logitech',
        description: 'The perfect business headset for voice calls, Skype, webinars and more. The 6.20 ft/1.9 m cable is just the right length to give you the freedom to stand up and stretch during long conversations.',
        images: [
            'https://m.media-amazon.com/images/I/61CqYq+xwNL._AC_SX425_.jpg',
            'https://m.media-amazon.com/images/I/715aalqIhKL._AC_SX425_.jpg',
            'https://m.media-amazon.com/images/I/61-u1xREiyL._AC_SX425_.jpg',
            'https://m.media-amazon.com/images/I/61uNzZ3K0cL._AC_SX425_.jpg'
        ],
        price: 23.27,
        rating: 4,
        stock: 20,
        categories: ["Home Entertainment"]
    },
    {
        name: 'Cámara web 1080P con micrófono',
        id: '03',
        brand: 'EMEET',
        description: 'Cámara web Full HD 1080P con cubierta de privacidad para videollamadas: la cámara web de computadora EMEET proporciona diseño y optimización para transmisión de video profesional. Vídeo realista de 1920 x 1080p, lente antirreflejos de 4 capas, proporcionando un video suave. La longitud focal fija hace que el objeto esté en el rango de longitud focal de 1.97 a 197 pulgadas, para proporcionar una imagen más clara. La cámara web USB C960 tiene una cubierta de privacidad y se puede quitar automáticamente para satisfacer tus necesidades de protección de privacidad, es una gran opción para la oficina en casa.',
        images: [
            'https://m.media-amazon.com/images/I/61-K2lXmHQL._AC_SX425_.jpg',
            'https://m.media-amazon.com/images/I/619eadDABYL._AC_SX425_.jpg',
            'https://m.media-amazon.com/images/I/61GZUE2ZARL._AC_SX425_.jpg',
            'https://m.media-amazon.com/images/I/61J5Qwjx3BL._AC_SX425_.jpg'
        ],
        price: 38.99,
        rating: 4.5,
        stock: 20,
        categories: ["Home Entertainment"]
    },
    {
        name: 'Auriculares estéreo para juegos',
        id: '04',
        brand: 'BENGOO ',
        description: 'Compatible con múltiples plataforma: compatible con PlayStation 4, Xbox One, PC, Nintendo 3DS, portátil, PSP, tableta, iPad, computadora, teléfono móvil. Ten en cuenta que necesitas un adaptador adicional de Microsoft (no incluido) cuando se conecta con un controlador Xbox One versión antigua.',
        images: [
            'https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_SX679_.jpg',
            'https://m.media-amazon.com/images/I/71z2WmHMtZL._AC_SX679_.jpg',
            'https://m.media-amazon.com/images/I/71UAwQgt-cL._AC_SX679_.jpg',
            'https://m.media-amazon.com/images/I/71Ie8vokMuL._AC_SX679_.jpg'
        ],
        price: 24.95,
        rating: 4.5,
        stock: 20,
        categories: ["Home Entertainment"]
    },
    {
        name: '',
        id: '',
        brand: ' ',
        description: '',
        images: [
            '',
            '',
            '',
            ''
        ],
        price: 24.95,
        rating: 4,
        stock: 20,
        categories: ["Home Entertainment"]
    }
]