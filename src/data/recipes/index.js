import CincauIce from '../../assets/img/es_cincau_hijau.jpg';
import VanillaIceCream from '../../assets/img/es_krim_vanila.jpg';
import Tea from '../../assets/img/es_teh_manis.jpg';
import OrangeJuice from '../../assets/img/jus_jeruk.jpg';
import MangoJuice from '../../assets/img/jus_mangga.jpg';
import FriedRice from '../../assets/img/nasi_goreng.jpg';
import Pasta from '../../assets/img/pasta_carbonara.jpg';
import Pizza from '../../assets/img/pizza_margarita.jpg';
import ChickenSoup from '../../assets/img/sop_ayam.jpg';
import WaterSpinach from '../../assets/img/tumis_kangkung.jpg';

const recipes = [
  {
    id: 'resep-1',
    nama: 'Nasi Goreng',
    kategori: 'Makanan',
    gambar: FriedRice,
    bahan: [
      { total: '300 gram', nama_bahan: 'nasi' },
      { total: '2 butir', nama_bahan: 'telur' },
      { total: '100 gram', nama_bahan: 'ayam' },
      { total: '50 gram', nama_bahan: 'bawang merah' },
      { total: '50 gram', nama_bahan: 'bawang putih' },
      { total: '2 sendok makan', nama_bahan: 'kecap manis' },
    ],
    langkah: [
      'Panaskan minyak, tumis bawang merah dan bawang putih hingga harum.',
      'Tambahkan ayam, masak hingga matang.',
      'Masukkan telur, aduk hingga telur matang.',
      'Tambahkan nasi dan kecap manis, aduk rata.',
      'Sajikan nasi goreng panas dengan irisan mentimun dan kerupuk.',
    ],
    peralatan: ['Wajan', 'Panci', 'Sendok', 'Piring'],
  },
  {
    id: 'resep-2',
    nama: 'Es Teh Manis',
    kategori: 'Minuman',
    gambar: Tea,
    bahan: [
      { total: '1 liter', nama_bahan: 'air' },
      { total: '10 sachet', nama_bahan: 'gula' },
      { total: '5 sendok makan', nama_bahan: 'teh celup' },
      { total: '100 gram', nama_bahan: 'es batu' },
    ],
    langkah: [
      'Didihkan air hingga mendidih.',
      'Masukkan teh celup ke dalam air mendidih, tambahkan gula.',
      'Aduk hingga gula larut, biarkan hingga teh berwarna pekat.',
      'Tuang teh ke dalam gelas yang sudah berisi es batu.',
      'Es teh manis siap disajikan.',
    ],
    peralatan: ['Cangkir', 'Sendok Teh', 'Pengaduk', 'Gelas'],
  },
  {
    id: 'resep-3',
    nama: 'Pasta Carbonara',
    kategori: 'Makanan',
    gambar: Pasta,
    bahan: [
      { total: '300 gram', nama_bahan: 'pasta' },
      { total: '200 gram', nama_bahan: 'bacon' },
      { total: '200 ml', nama_bahan: 'susu cair' },
      { total: '100 gram', nama_bahan: 'keju parmesan' },
      { total: '2 butir', nama_bahan: 'telur' },
      { total: '3 siung', nama_bahan: 'bawang putih' },
      { total: '1 sendok makan', nama_bahan: 'minyak zaitun' },
    ],
    langkah: [
      'Rebus pasta sesuai petunjuk kemasan, tiriskan.',
      'Panaskan minyak zaitun, tumis bawang putih hingga harum.',
      'Tambahkan bacon, masak hingga kecoklatan.',
      'Kocok telur dan susu cair dalam mangkuk besar.',
      'Campurkan pasta yang sudah direbus dengan bacon dan bawang putih.',
      'Tuangkan campuran telur dan susu cair, aduk cepat hingga tercampur rata.',
      'Taburkan keju parmesan di atasnya, sajikan selagi hangat.',
    ],
    peralatan: ['Panci', 'Wajan', 'Piring', 'Sendok'],
  },
  {
    id: 'resep-4',
    nama: 'Sop Ayam',
    kategori: 'Makanan',
    gambar: ChickenSoup,
    bahan: [
      { total: '500 gram', nama_bahan: 'ayam' },
      { total: '2 liter', nama_bahan: 'air' },
      { total: '3 batang', nama_bahan: 'daun bawang' },
      { total: '3 batang', nama_bahan: 'seledri' },
      { total: '2 buah', nama_bahan: 'wortel' },
      { total: '3 siung', nama_bahan: 'bawang putih' },
    ],
    langkah: [
      'Rebus air hingga mendidih.',
      'Masukkan ayam dan bawang putih, rebus hingga ayam matang.',
      'Tambahkan wortel, daun bawang, dan seledri, masak hingga sayuran lunak.',
      'Beri garam dan merica secukupnya, aduk rata.',
      'Sop ayam siap disajikan selagi hangat.',
    ],
    peralatan: ['Panci', 'Sendok', 'Piring', 'Gelas'],
  },
  {
    id: 'resep-5',
    nama: 'Jus Jeruk Segar',
    kategori: 'Minuman',
    gambar: OrangeJuice,
    bahan: [
      { total: '5 buah', nama_bahan: 'jeruk' },
      { total: '100 gram', nama_bahan: 'gula pasir' },
      { total: '500 ml', nama_bahan: 'air' },
      { total: '100 gram', nama_bahan: 'es batu' },
    ],
    langkah: [
      'Kupas jeruk, buang bijinya.',
      'Masukkan jeruk ke dalam blender bersama dengan gula pasir dan air.',
      'Blender hingga halus dan gula larut.',
      'Saring jus jeruk yang sudah diblender.',
      'Tuangkan jus jeruk ke dalam gelas yang sudah berisi es batu.',
      'Jus jeruk segar siap dinikmati.',
    ],
    peralatan: ['Blender', 'Sendok', 'Gelas'],
  },
  {
    id: 'resep-6',
    nama: 'Pizza Margherita',
    kategori: 'Makanan',
    gambar: Pizza,
    bahan: [
      { total: '300 gram', nama_bahan: 'tepung terigu' },
      { total: '200 ml', nama_bahan: 'air' },
      { total: '1 sendok teh', nama_bahan: 'ragi instan' },
      { total: '1 sendok makan', nama_bahan: 'gula' },
      { total: '1 sendok teh', nama_bahan: 'garam' },
      { total: '100 ml', nama_bahan: 'saus tomat' },
      { total: '200 gram', nama_bahan: 'mozzarella' },
      { total: '1 lembar', nama_bahan: 'daun basil segar' },
    ],
    langkah: [
      'Campurkan tepung terigu, ragi, gula, dan garam dalam mangkuk besar.',
      'Tambahkan air sedikit demi sedikit sambil terus diaduk hingga menjadi adonan kalis.',
      'Diamkan adonan selama 1 jam hingga mengembang.',
      'Giling adonan hingga tipis, lalu letakkan di atas loyang pizza.',
      'Olesi saus tomat di atas adonan, taburkan mozzarella, dan hias dengan daun basil.',
      'Panggang pizza dalam oven yang sudah dipanaskan hingga matang.',
      'Pizza Margherita siap disajikan.',
    ],
    peralatan: ['Mangkuk', 'Loyang pizza', 'Oven', 'Gilingan'],
  },
  {
    id: 'resep-7',
    nama: 'Mango Smoothie',
    kategori: 'Minuman',
    gambar: MangoJuice,
    bahan: [
      { total: '2 buah', nama_bahan: 'mangga' },
      { total: '200 ml', nama_bahan: 'susu almond' },
      { total: '100 ml', nama_bahan: 'air' },
      { total: '1 sendok makan', nama_bahan: 'madu' },
      { total: '100 gram', nama_bahan: 'yogurt' },
      { total: '100 gram', nama_bahan: 'es batu' },
    ],
    langkah: [
      'Kupas dan potong mangga menjadi dadu kecil.',
      'Masukkan potongan mangga ke dalam blender bersama susu almond, air, madu, yogurt, dan es batu.',
      'Blender hingga halus dan konsisten.',
      'Tuangkan smoothie ke dalam gelas saji.',
      'Mango smoothie siap dinikmati.',
    ],
    peralatan: ['Blender', 'Pisau', 'Gelas'],
  },
  {
    id: 'resep-8',
    nama: 'Tumis Kangkung',
    kategori: 'Makanan',
    gambar: WaterSpinach,
    bahan: [
      { total: '300 gram', nama_bahan: 'kangkung' },
      { total: '3 siung', nama_bahan: 'bawang putih' },
      { total: '2 buah', nama_bahan: 'cabai merah' },
      { total: '2 sendok makan', nama_bahan: 'minyak goreng' },
      { total: '1 sendok teh', nama_bahan: 'garam' },
      { total: '1 sendok teh', nama_bahan: 'gula' },
    ],
    langkah: [
      'Cuci bersih kangkung, potong-potong.',
      'Tumis bawang putih hingga harum.',
      'Tambahkan cabai merah, aduk hingga layu.',
      'Masukkan kangkung, aduk rata.',
      'Tambahkan garam dan gula, aduk hingga kangkung layu.',
      'Angkat dan sajikan.',
      'Tumis kangkung siap disantap.',
    ],
    peralatan: ['Wajan', 'Sendok', 'Pisau'],
  },
  {
    id: 'resep-9',
    nama: 'Es Krim Vanila',
    kategori: 'Makanan',
    gambar: VanillaIceCream,
    bahan: [
      { total: '500 ml', nama_bahan: 'susu cair' },
      { total: '200 ml', nama_bahan: 'krim kental' },
      { total: '150 gram', nama_bahan: 'gula pasir' },
      { total: '1 sendok teh', nama_bahan: 'pasta vanila' },
    ],
    langkah: [
      'Campur susu cair dan krim kental dalam panci, panaskan dengan api kecil.',
      'Tambahkan gula pasir, aduk hingga larut.',
      'Masak hingga campuran mendidih, lalu matikan api.',
      'Biarkan campuran dingin, tambahkan pasta vanila, aduk rata.',
      'Tuangkan campuran ke dalam wadah tahan panas, dinginkan dalam freezer selama 6 jam atau semalaman.',
      'Es krim vanila siap disajikan.',
    ],
    peralatan: ['Panci', 'Wadah tahan panas', 'Freezer'],
  },
  {
    id: 'resep-10',
    nama: 'Es Cincau Hijau',
    kategori: 'Minuman',
    gambar: CincauIce,
    bahan: [
      { total: '100 gram', nama_bahan: 'daun cincau hijau' },
      { total: '200 gram', nama_bahan: 'gula merah' },
      { total: '800 ml', nama_bahan: 'air' },
      { total: '100 ml', nama_bahan: 'santank' },
      { total: '100 gram', nama_bahan: 'es batu' },
    ],
    langkah: [
      'Rebus daun cincau hijau dalam air hingga mendidih, angkat dan saring.',
      'Sisihkan cincau dan air rebusannya.',
      'Rebus gula merah dengan air hingga larut, angkat dan dinginkan.',
      'Campurkan cincau, air rebusan cincau, dan air gula merah dalam mangkuk.',
      'Tambahkan santan dan es batu.',
      'Es cincau hijau siap disajikan.',
    ],
    peralatan: ['Panci', 'Saringan', 'Mangkuk', 'Gelas'],
  },
];

export default recipes;
