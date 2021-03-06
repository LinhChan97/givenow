<?php

use Illuminate\Database\Seeder;
use App\Models\V1\City;
use Illuminate\Support\Str;

class CitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $cities = array(
            'HANOI' => 'Hà Nội',
            'HOCHIMINH' => 'Hồ Chí Minh',
            'HAIPHONG' => 'Hải Phòng',
            'DANANG' => 'Đà Nẵng',
            'HAGIANG' => 'Hà Giang',
            'CAOBANG' => 'Cao Bằng',
            'LAICHAU' => 'Lai Châu',
            'LAOCAI' => 'Lào Cai',
            'TUYENQUANG' => 'Tuyên Quang',
            'LANGSON' => 'Lạng Sơn',
            'BACKAN' => 'Bắc Kạn',
            'THAINGUYEN' => 'Thái Nguyên',
            'YENBAI' => 'Yên Bái',
            'SONLA' => 'Sơn La',
            'PHUTHO' => 'Phú Thọ',
            'VINHPHUC' => 'Vĩnh Phúc',
            'QUANGNINH' => 'Quảng Ninh',
            'BACGIANG' => 'Bắc Giang',
            'BACNINH' => 'Bắc Ninh',
            'HAIDUONG' => 'Hải Dương',
            'HUNGYEN' => 'Hưng Yên',
            'HOABINH' => 'Hòa Bình',
            'HANAM' => 'Hà Nam',
            'NAMDINH' => 'Nam Định',
            'THAIBINH' => 'Thái Bình',
            'NINHBINH' => 'Ninh Bình',
            'THANHHOA' => 'Thanh Hóa',
            'NGHEAN' => 'Nghệ An',
            'HATINH' => 'Hà Tĩnh',
            'QUANGBINH' => 'Quảng Bình',
            'QUANGTRI' => 'Quảng Trị',
            'THUATHIENHUE' => 'Thừa Thiên Huế',
            'QUANGNAM' => 'Quảng Nam',
            'QUANGNGAI' => 'Quảng Ngãi',
            'KONTUM' => 'Kon Tum',
            'BINHDINH' => 'Bình Định',
            'GIALAI' => 'Gia Lai',
            'PHUYEN' => 'Phú Yên',
            'DAKLAK' => 'Đăk Lăk',
            'KHANHHOA' => 'Khánh Hòa',
            'LAMDONG' => 'Lâm Đồng',
            'BINHPHUOC' => 'Bình Phước',
            'BINHDUONG' => 'Bình Dương',
            'NINHTHUAN' => 'Ninh Thuận',
            'TAYNINH' => 'Tây Ninh',
            'BINHTHUAN' => 'Bình Thuận',
            'DONGNAI' => 'Đồng Nai',
            'LONGAN' => 'Long An',
            'DONGTHAP' => 'Đồng Tháp',
            'ANGIANG' => 'An Giang',
            'BARIAVUNGTAU' => 'Bà Rịa Vũng Tàu',
            'TIENGIANG' => 'Tiền Giang',
            'KIENGIANG' => 'Kiên Giang',
            'TRAVINH' => 'Trà Vinh',
            'BENTRE' => 'Bến Tre',
            'VINHLONG' => 'Vĩnh Long',
            'SOCTRANG' => 'Sóc Trăng',
            'BACLIEU' => 'Bạc Liêu',
            'CAMAU' => 'Cà Mau',
            'DIENBIEN' => 'Điện Biên',
            'DAKNONG' => 'Đắk Nông',
            'HAUGIANG' => 'Hậu giang',
        );

        foreach($cities as $city) {
            factory(App\Models\V1\City::class, 1)->create(
                ['name' => $city]
            );
        }
    }
}
