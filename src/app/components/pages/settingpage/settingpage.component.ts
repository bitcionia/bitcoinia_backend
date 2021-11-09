import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/app/shared/services/http.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
// import { LoaderComponent } from 'src/app/shared/components/loader/load.service';
@Component({
  selector: 'app-settingpage',
  templateUrl: './settingpage.component.html',
  styleUrls: ['./settingpage.component.scss']
})
export class SettingpageComponent implements OnInit {
imageUrl="assets/img/brand/Bitconia white.png";
FavIcon="assets/img/brand/Symbo-pngl.ico";
signin_logo="assets/img/brand/Bitconia white.png";
  submitted = false;
  submitted1 = false;
  submitted2 = false;
  fileToUpload: File | null = null;
 baseApiUrl = "https://www.bitconia.com/uploads/settings/admin@bitcoinio.com"
  Country : any= [
    {
    "name": "Afghanistan",
    "dial_code": "+93",
    "code": "AF"
    },
    {
    "name": "Aland Islands",
    "dial_code": "+358",
    "code": "AX"
    },
    {
    "name": "Albania",
    "dial_code": "+355",
    "code": "AL"
    },
    {
    "name": "Algeria",
    "dial_code": "+213",
    "code": "DZ"
    },
    {
    "name": "AmericanSamoa",
    "dial_code": "+1684",
    "code": "AS"
    },
    {
    "name": "Andorra",
    "dial_code": "+376",
    "code": "AD"
    },
    {
    "name": "Angola",
    "dial_code": "+244",
    "code": "AO"
    },
    {
    "name": "Anguilla",
    "dial_code": "+1264",
    "code": "AI"
    },
    {
    "name": "Antarctica",
    "dial_code": "+672",
    "code": "AQ"
    },
    {
    "name": "Antigua and Barbuda",
    "dial_code": "+1268",
    "code": "AG"
    },
    {
    "name": "Argentina",
    "dial_code": "+54",
    "code": "AR"
    },
    {
    "name": "Armenia",
    "dial_code": "+374",
    "code": "AM"
    },
    {
    "name": "Aruba",
    "dial_code": "+297",
    "code": "AW"
    },
    {
    "name": "Australia",
    "dial_code": "+61",
    "code": "AU"
    },
    {
    "name": "Austria",
    "dial_code": "+43",
    "code": "AT"
    },
    {
    "name": "Azerbaijan",
    "dial_code": "+994",
    "code": "AZ"
    },
    {
    "name": "Bahamas",
    "dial_code": "+1242",
    "code": "BS"
    },
    {
    "name": "Bahrain",
    "dial_code": "+973",
    "code": "BH"
    },
    {
    "name": "Bangladesh",
    "dial_code": "+880",
    "code": "BD"
    },
    {
    "name": "Barbados",
    "dial_code": "+1246",
    "code": "BB"
    },
    {
    "name": "Belarus",
    "dial_code": "+375",
    "code": "BY"
    },
    {
    "name": "Belgium",
    "dial_code": "+32",
    "code": "BE"
    },
    {
    "name": "Belize",
    "dial_code": "+501",
    "code": "BZ"
    },
    {
    "name": "Benin",
    "dial_code": "+229",
    "code": "BJ"
    },
    {
    "name": "Bermuda",
    "dial_code": "+1441",
    "code": "BM"
    },
    {
    "name": "Bhutan",
    "dial_code": "+975",
    "code": "BT"
    },
    {
    "name": "Bolivia, Plurinational State of",
    "dial_code": "+591",
    "code": "BO"
    },
    {
    "name": "Bosnia and Herzegovina",
    "dial_code": "+387",
    "code": "BA"
    },
    {
    "name": "Botswana",
    "dial_code": "+267",
    "code": "BW"
    },
    {
    "name": "Brazil",
    "dial_code": "+55",
    "code": "BR"
    },
    {
    "name": "British Indian Ocean Territory",
    "dial_code": "+246",
    "code": "IO"
    },
    {
    "name": "Brunei Darussalam",
    "dial_code": "+673",
    "code": "BN"
    },
    {
    "name": "Bulgaria",
    "dial_code": "+359",
    "code": "BG"
    },
    {
    "name": "Burkina Faso",
    "dial_code": "+226",
    "code": "BF"
    },
    {
    "name": "Burundi",
    "dial_code": "+257",
    "code": "BI"
    },
    {
    "name": "Cambodia",
    "dial_code": "+855",
    "code": "KH"
    },
    {
    "name": "Cameroon",
    "dial_code": "+237",
    "code": "CM"
    },
    {
    "name": "Canada",
    "dial_code": "+1",
    "code": "CA"
    },
    {
    "name": "Cape Verde",
    "dial_code": "+238",
    "code": "CV"
    },
    {
    "name": "Cayman Islands",
    "dial_code": "+ 345",
    "code": "KY"
    },
    {
    "name": "Central African Republic",
    "dial_code": "+236",
    "code": "CF"
    },
    {
    "name": "Chad",
    "dial_code": "+235",
    "code": "TD"
    },
    {
    "name": "Chile",
    "dial_code": "+56",
    "code": "CL"
    },
    {
    "name": "China",
    "dial_code": "+86",
    "code": "CN"
    },
    {
    "name": "Christmas Island",
    "dial_code": "+61",
    "code": "CX"
    },
    {
    "name": "Cocos (Keeling) Islands",
    "dial_code": "+61",
    "code": "CC"
    },
    {
    "name": "Colombia",
    "dial_code": "+57",
    "code": "CO"
    },
    {
    "name": "Comoros",
    "dial_code": "+269",
    "code": "KM"
    },
    {
    "name": "Congo",
    "dial_code": "+242",
    "code": "CG"
    },
    {
    "name": "Congo, The Democratic Republic of the Congo",
    "dial_code": "+243",
    "code": "CD"
    },
    {
    "name": "Cook Islands",
    "dial_code": "+682",
    "code": "CK"
    },
    {
    "name": "Costa Rica",
    "dial_code": "+506",
    "code": "CR"
    },
    {
    "name": "Cote d'Ivoire",
    "dial_code": "+225",
    "code": "CI"
    },
    {
    "name": "Croatia",
    "dial_code": "+385",
    "code": "HR"
    },
    {
    "name": "Cuba",
    "dial_code": "+53",
    "code": "CU"
    },
    {
    "name": "Cyprus",
    "dial_code": "+357",
    "code": "CY"
    },
    {
    "name": "Czech Republic",
    "dial_code": "+420",
    "code": "CZ"
    },
    {
    "name": "Denmark",
    "dial_code": "+45",
    "code": "DK"
    },
    {
    "name": "Djibouti",
    "dial_code": "+253",
    "code": "DJ"
    },
    {
    "name": "Dominica",
    "dial_code": "+1767",
    "code": "DM"
    },
    {
    "name": "Dominican Republic",
    "dial_code": "+1849",
    "code": "DO"
    },
    {
      "name": "Dubai",
      "dial_code": "+971",
      "code": "UAE"
      },
    {
    "name": "Ecuador",
    "dial_code": "+593",
    "code": "EC"
    },
    {
    "name": "Egypt",
    "dial_code": "+20",
    "code": "EG"
    },
    {
    "name": "El Salvador",
    "dial_code": "+503",
    "code": "SV"
    },
    {
    "name": "Equatorial Guinea",
    "dial_code": "+240",
    "code": "GQ"
    },
    {
    "name": "Eritrea",
    "dial_code": "+291",
    "code": "ER"
    },
    {
    "name": "Estonia",
    "dial_code": "+372",
    "code": "EE"
    },
    {
    "name": "Ethiopia",
    "dial_code": "+251",
    "code": "ET"
    },
    {
    "name": "Falkland Islands (Malvinas)",
    "dial_code": "+500",
    "code": "FK"
    },
    {
    "name": "Faroe Islands",
    "dial_code": "+298",
    "code": "FO"
    },
    {
    "name": "Fiji",
    "dial_code": "+679",
    "code": "FJ"
    },
    {
    "name": "Finland",
    "dial_code": "+358",
    "code": "FI"
    },
    {
    "name": "France",
    "dial_code": "+33",
    "code": "FR"
    },
    {
    "name": "French Guiana",
    "dial_code": "+594",
    "code": "GF"
    },
    {
    "name": "French Polynesia",
    "dial_code": "+689",
    "code": "PF"
    },
    {
    "name": "Gabon",
    "dial_code": "+241",
    "code": "GA"
    },
    {
    "name": "Gambia",
    "dial_code": "+220",
    "code": "GM"
    },
    {
    "name": "Georgia",
    "dial_code": "+995",
    "code": "GE"
    },
    {
    "name": "Germany",
    "dial_code": "+49",
    "code": "DE"
    },
    {
    "name": "Ghana",
    "dial_code": "+233",
    "code": "GH"
    },
    {
    "name": "Gibraltar",
    "dial_code": "+350",
    "code": "GI"
    },
    {
    "name": "Greece",
    "dial_code": "+30",
    "code": "GR"
    },
    {
    "name": "Greenland",
    "dial_code": "+299",
    "code": "GL"
    },
    {
    "name": "Grenada",
    "dial_code": "+1473",
    "code": "GD"
    },
    {
    "name": "Guadeloupe",
    "dial_code": "+590",
    "code": "GP"
    },
    {
    "name": "Guam",
    "dial_code": "+1671",
    "code": "GU"
    },
    {
    "name": "Guatemala",
    "dial_code": "+502",
    "code": "GT"
    },
    {
    "name": "Guernsey",
    "dial_code": "+44",
    "code": "GG"
    },
    {
    "name": "Guinea",
    "dial_code": "+224",
    "code": "GN"
    },
    {
    "name": "Guinea-Bissau",
    "dial_code": "+245",
    "code": "GW"
    },
    {
    "name": "Guyana",
    "dial_code": "+595",
    "code": "GY"
    },
    {
    "name": "Haiti",
    "dial_code": "+509",
    "code": "HT"
    },
    {
    "name": "Holy See (Vatican City State)",
    "dial_code": "+379",
    "code": "VA"
    },
    {
    "name": "Honduras",
    "dial_code": "+504",
    "code": "HN"
    },
    {
    "name": "Hong Kong",
    "dial_code": "+852",
    "code": "HK"
    },
    {
    "name": "Hungary",
    "dial_code": "+36",
    "code": "HU"
    },
    {
    "name": "Iceland",
    "dial_code": "+354",
    "code": "IS"
    },
    {
    "name": "India",
    "dial_code": "+91",
    "code": "IN"
    },
    {
    "name": "Indonesia",
    "dial_code": "+62",
    "code": "ID"
    },
    {
    "name": "Iran, Islamic Republic of Persian Gulf",
    "dial_code": "+98",
    "code": "IR"
    },
    {
    "name": "Iraq",
    "dial_code": "+964",
    "code": "IQ"
    },
    {
    "name": "Ireland",
    "dial_code": "+353",
    "code": "IE"
    },
    {
    "name": "Isle of Man",
    "dial_code": "+44",
    "code": "IM"
    },
    {
    "name": "Israel",
    "dial_code": "+972",
    "code": "IL"
    },
    {
    "name": "Italy",
    "dial_code": "+39",
    "code": "IT"
    },
    {
    "name": "Jamaica",
    "dial_code": "+1876",
    "code": "JM"
    },
    {
    "name": "Japan",
    "dial_code": "+81",
    "code": "JP"
    },
    {
    "name": "Jersey",
    "dial_code": "+44",
    "code": "JE"
    },
    {
    "name": "Jordan",
    "dial_code": "+962",
    "code": "JO"
    },
    {
    "name": "Kazakhstan",
    "dial_code": "+77",
    "code": "KZ"
    },
    {
    "name": "Kenya",
    "dial_code": "+254",
    "code": "KE"
    },
    {
    "name": "Kiribati",
    "dial_code": "+686",
    "code": "KI"
    },
    {
    "name": "Korea, Democratic People's Republic of Korea",
    "dial_code": "+850",
    "code": "KP"
    },
    {
    "name": "Korea, Republic of South Korea",
    "dial_code": "+82",
    "code": "KR"
    },
    {
    "name": "Kuwait",
    "dial_code": "+965",
    "code": "KW"
    },
    {
    "name": "Kyrgyzstan",
    "dial_code": "+996",
    "code": "KG"
    },
    {
    "name": "Laos",
    "dial_code": "+856",
    "code": "LA"
    },
    {
    "name": "Latvia",
    "dial_code": "+371",
    "code": "LV"
    },
    {
    "name": "Lebanon",
    "dial_code": "+961",
    "code": "LB"
    },
    {
    "name": "Lesotho",
    "dial_code": "+266",
    "code": "LS"
    },
    {
    "name": "Liberia",
    "dial_code": "+231",
    "code": "LR"
    },
    {
    "name": "Libyan Arab Jamahiriya",
    "dial_code": "+218",
    "code": "LY"
    },
    {
    "name": "Liechtenstein",
    "dial_code": "+423",
    "code": "LI"
    },
    {
    "name": "Lithuania",
    "dial_code": "+370",
    "code": "LT"
    },
    {
    "name": "Luxembourg",
    "dial_code": "+352",
    "code": "LU"
    },
    {
    "name": "Macao",
    "dial_code": "+853",
    "code": "MO"
    },
    {
    "name": "Macedonia",
    "dial_code": "+389",
    "code": "MK"
    },
    {
    "name": "Madagascar",
    "dial_code": "+261",
    "code": "MG"
    },
    {
    "name": "Malawi",
    "dial_code": "+265",
    "code": "MW"
    },
    {
    "name": "Malaysia",
    "dial_code": "+60",
    "code": "MY"
    },
    {
    "name": "Maldives",
    "dial_code": "+960",
    "code": "MV"
    },
    {
    "name": "Mali",
    "dial_code": "+223",
    "code": "ML"
    },
    {
    "name": "Malta",
    "dial_code": "+356",
    "code": "MT"
    },
    {
    "name": "Marshall Islands",
    "dial_code": "+692",
    "code": "MH"
    },
    {
    "name": "Martinique",
    "dial_code": "+596",
    "code": "MQ"
    },
    {
    "name": "Mauritania",
    "dial_code": "+222",
    "code": "MR"
    },
    {
    "name": "Mauritius",
    "dial_code": "+230",
    "code": "MU"
    },
    {
    "name": "Mayotte",
    "dial_code": "+262",
    "code": "YT"
    },
    {
    "name": "Mexico",
    "dial_code": "+52",
    "code": "MX"
    },
    {
    "name": "Micronesia, Federated States of Micronesia",
    "dial_code": "+691",
    "code": "FM"
    },
    {
    "name": "Moldova",
    "dial_code": "+373",
    "code": "MD"
    },
    {
    "name": "Monaco",
    "dial_code": "+377",
    "code": "MC"
    },
    {
    "name": "Mongolia",
    "dial_code": "+976",
    "code": "MN"
    },
    {
    "name": "Montenegro",
    "dial_code": "+382",
    "code": "ME"
    },
    {
    "name": "Montserrat",
    "dial_code": "+1664",
    "code": "MS"
    },
    {
    "name": "Morocco",
    "dial_code": "+212",
    "code": "MA"
    },
    {
    "name": "Mozambique",
    "dial_code": "+258",
    "code": "MZ"
    },
    {
    "name": "Myanmar",
    "dial_code": "+95",
    "code": "MM"
    },
    {
    "name": "Namibia",
    "dial_code": "+264",
    "code": "NA"
    },
    {
    "name": "Nauru",
    "dial_code": "+674",
    "code": "NR"
    },
    {
    "name": "Nepal",
    "dial_code": "+977",
    "code": "NP"
    },
    {
    "name": "Netherlands",
    "dial_code": "+31",
    "code": "NL"
    },
    {
    "name": "Netherlands Antilles",
    "dial_code": "+599",
    "code": "AN"
    },
    {
    "name": "New Caledonia",
    "dial_code": "+687",
    "code": "NC"
    },
    {
    "name": "New Zealand",
    "dial_code": "+64",
    "code": "NZ"
    },
    {
    "name": "Nicaragua",
    "dial_code": "+505",
    "code": "NI"
    },
    {
    "name": "Niger",
    "dial_code": "+227",
    "code": "NE"
    },
    {
    "name": "Nigeria",
    "dial_code": "+234",
    "code": "NG"
    },
    {
    "name": "Niue",
    "dial_code": "+683",
    "code": "NU"
    },
    {
    "name": "Norfolk Island",
    "dial_code": "+672",
    "code": "NF"
    },
    {
    "name": "Northern Mariana Islands",
    "dial_code": "+1670",
    "code": "MP"
    },
    {
    "name": "Norway",
    "dial_code": "+47",
    "code": "NO"
    },
    {
    "name": "Oman",
    "dial_code": "+968",
    "code": "OM"
    },
    {
    "name": "Pakistan",
    "dial_code": "+92",
    "code": "PK"
    },
    {
    "name": "Palau",
    "dial_code": "+680",
    "code": "PW"
    },
    {
    "name": "Palestinian Territory, Occupied",
    "dial_code": "+970",
    "code": "PS"
    },
    {
    "name": "Panama",
    "dial_code": "+507",
    "code": "PA"
    },
    {
    "name": "Papua New Guinea",
    "dial_code": "+675",
    "code": "PG"
    },
    {
    "name": "Paraguay",
    "dial_code": "+595",
    "code": "PY"
    },
    {
    "name": "Peru",
    "dial_code": "+51",
    "code": "PE"
    },
    {
    "name": "Philippines",
    "dial_code": "+63",
    "code": "PH"
    },
    {
    "name": "Pitcairn",
    "dial_code": "+872",
    "code": "PN"
    },
    {
    "name": "Poland",
    "dial_code": "+48",
    "code": "PL"
    },
    {
    "name": "Portugal",
    "dial_code": "+351",
    "code": "PT"
    },
    {
    "name": "Puerto Rico",
    "dial_code": "+1939",
    "code": "PR"
    },
    {
    "name": "Qatar",
    "dial_code": "+974",
    "code": "QA"
    },
    {
    "name": "Romania",
    "dial_code": "+40",
    "code": "RO"
    },
    {
    "name": "Russia",
    "dial_code": "+7",
    "code": "RU"
    },
    {
    "name": "Rwanda",
    "dial_code": "+250",
    "code": "RW"
    },
    {
    "name": "Reunion",
    "dial_code": "+262",
    "code": "RE"
    },
    {
    "name": "Saint Barthelemy",
    "dial_code": "+590",
    "code": "BL"
    },
    {
    "name": "Saint Helena, Ascension and Tristan Da Cunha",
    "dial_code": "+290",
    "code": "SH"
    },
    {
    "name": "Saint Kitts and Nevis",
    "dial_code": "+1869",
    "code": "KN"
    },
    {
    "name": "Saint Lucia",
    "dial_code": "+1758",
    "code": "LC"
    },
    {
    "name": "Saint Martin",
    "dial_code": "+590",
    "code": "MF"
    },
    {
    "name": "Saint Pierre and Miquelon",
    "dial_code": "+508",
    "code": "PM"
    },
    {
    "name": "Saint Vincent and the Grenadines",
    "dial_code": "+1784",
    "code": "VC"
    },
    {
    "name": "Samoa",
    "dial_code": "+685",
    "code": "WS"
    },
    {
    "name": "San Marino",
    "dial_code": "+378",
    "code": "SM"
    },
    {
    "name": "Sao Tome and Principe",
    "dial_code": "+239",
    "code": "ST"
    },
    {
    "name": "Saudi Arabia",
    "dial_code": "+966",
    "code": "SA"
    },
    {
    "name": "Senegal",
    "dial_code": "+221",
    "code": "SN"
    },
    {
    "name": "Serbia",
    "dial_code": "+381",
    "code": "RS"
    },
    {
    "name": "Seychelles",
    "dial_code": "+248",
    "code": "SC"
    },
    {
    "name": "Sierra Leone",
    "dial_code": "+232",
    "code": "SL"
    },
    {
    "name": "Singapore",
    "dial_code": "+65",
    "code": "SG"
    },
    {
    "name": "Slovakia",
    "dial_code": "+421",
    "code": "SK"
    },
    {
    "name": "Slovenia",
    "dial_code": "+386",
    "code": "SI"
    },
    {
    "name": "Solomon Islands",
    "dial_code": "+677",
    "code": "SB"
    },
    {
    "name": "Somalia",
    "dial_code": "+252",
    "code": "SO"
    },
    {
    "name": "South Africa",
    "dial_code": "+27",
    "code": "ZA"
    },
    {
    "name": "South Sudan",
    "dial_code": "+211",
    "code": "SS"
    },
    {
    "name": "South Georgia and the South Sandwich Islands",
    "dial_code": "+500",
    "code": "GS"
    },
    {
    "name": "Spain",
    "dial_code": "+34",
    "code": "ES"
    },
    {
    "name": "Sri Lanka",
    "dial_code": "+94",
    "code": "LK"
    },
    {
    "name": "Sudan",
    "dial_code": "+249",
    "code": "SD"
    },
    {
    "name": "Suriname",
    "dial_code": "+597",
    "code": "SR"
    },
    {
    "name": "Svalbard and Jan Mayen",
    "dial_code": "+47",
    "code": "SJ"
    },
    {
    "name": "Swaziland",
    "dial_code": "+268",
    "code": "SZ"
    },
    {
    "name": "Sweden",
    "dial_code": "+46",
    "code": "SE"
    },
    {
    "name": "Switzerland",
    "dial_code": "+41",
    "code": "CH"
    },
    {
    "name": "Syrian Arab Republic",
    "dial_code": "+963",
    "code": "SY"
    },
    {
    "name": "Taiwan",
    "dial_code": "+886",
    "code": "TW"
    },
    {
    "name": "Tajikistan",
    "dial_code": "+992",
    "code": "TJ"
    },
    {
    "name": "Tanzania, United Republic of Tanzania",
    "dial_code": "+255",
    "code": "TZ"
    },
    {
    "name": "Thailand",
    "dial_code": "+66",
    "code": "TH"
    },
    {
    "name": "Timor-Leste",
    "dial_code": "+670",
    "code": "TL"
    },
    {
    "name": "Togo",
    "dial_code": "+228",
    "code": "TG"
    },
    {
    "name": "Tokelau",
    "dial_code": "+690",
    "code": "TK"
    },
    {
    "name": "Tonga",
    "dial_code": "+676",
    "code": "TO"
    },
    {
    "name": "Trinidad and Tobago",
    "dial_code": "+1868",
    "code": "TT"
    },
    {
    "name": "Tunisia",
    "dial_code": "+216",
    "code": "TN"
    },
    {
    "name": "Turkey",
    "dial_code": "+90",
    "code": "TR"
    },
    {
    "name": "Turkmenistan",
    "dial_code": "+993",
    "code": "TM"
    },
    {
    "name": "Turks and Caicos Islands",
    "dial_code": "+1649",
    "code": "TC"
    },
    {
    "name": "Tuvalu",
    "dial_code": "+688",
    "code": "TV"
    },
    {
    "name": "Uganda",
    "dial_code": "+256",
    "code": "UG"
    },
    {
    "name": "Ukraine",
    "dial_code": "+380",
    "code": "UA"
    },
    {
    "name": "United Arab Emirates",
    "dial_code": "+971",
    "code": "AE"
    },
    {
    "name": "United Kingdom",
    "dial_code": "+44",
    "code": "GB"
    },
    {
    "name": "United States",
    "dial_code": "+1",
    "code": "US"
    },
    {
    "name": "Uruguay",
    "dial_code": "+598",
    "code": "UY"
    },
    {
    "name": "Uzbekistan",
    "dial_code": "+998",
    "code": "UZ"
    },
    {
    "name": "Vanuatu",
    "dial_code": "+678",
    "code": "VU"
    },
    {
    "name": "Venezuela, Bolivarian Republic of Venezuela",
    "dial_code": "+58",
    "code": "VE"
    },
    {
    "name": "Vietnam",
    "dial_code": "+84",
    "code": "VN"
    },
    {
    "name": "Virgin Islands, British",
    "dial_code": "+1284",
    "code": "VG"
    },
    {
    "name": "Virgin Islands, U.S.",
    "dial_code": "+1340",
    "code": "VI"
    },
    {
    "name": "Wallis and Futuna",
    "dial_code": "+681",
    "code": "WF"
    },
    {
    "name": "Yemen",
    "dial_code": "+967",
    "code": "YE"
    },
    {
    "name": "Zambia",
    "dial_code": "+260",
    "code": "ZM"
    },
    {
    "name": "Zimbabwe",
    "dial_code": "+263",
    "code": "ZW"
    }
    ]
  data: any;
  totalLength: any;
  showDatafound: boolean;
  applicationname: any;
  companyname: any;
  address: any;
  email: any;
  websiteurl: any;
  country: any;
  state: any;
  city: any;
  postalcode: any;
  phonenumber: any;
  fax: any;
  image1:any;
    image2:any;
  image3:any;

  //  fileToUpload: any;
    loginForm: FormGroup;
    form: FormGroup;
meta:FormGroup;
sms:FormGroup;
emailauth:FormGroup;
googleauth:FormGroup;
sms_ak:any;
sms_sk:any;
email_ak:any;
email_sk:any;
googleauth_ak:any;
googleauth_sk:any;
meta_description:any;
meta_keywords:any;
  // public formData = new FormData();

  constructor(
    public toastr: ToastrService,

    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private routeTo: Router,
  
    public httpService: HttpService,
    private router: Router,
    private loader:NgxUiLoaderService,
  ) { 
     this.meta = this.formBuilder.group({
   'description':['', Validators.required],
    // 'username':['', Validators.required],
    'keywords': ['', Validators.required],    })
   
     
     this.googleauth = this.formBuilder.group({
   'googleauth_ak':['', Validators.required],
    // 'username':['', Validators.required],
    'googleauth_sk': ['', Validators.required],    })
  }

  ngOnInit(): void {
    this.getlist();
  this.createForm();
  this.SMS();
  this.Email();
  }
  get loginFormControl() {
    return this.loginForm.controls;
  }
getdashboard(){
  this.router.navigateByUrl('/dashboard/dashboard')
}
Email(){
  this.emailauth = this.formBuilder.group({
    'email_ak':['', Validators.required],
     // 'username':['', Validators.required],
     'email_sk': ['', Validators.required],    })
}
SMS() {
  this.sms = this.formBuilder.group({
   'sms_ak':['', Validators.required],
    // 'username':['', Validators.required],
    'sms_sk': ['', Validators.required],    })
}
createForm() {
  this.loginForm = this.formBuilder.group({

    'applicationname':['', Validators.required],
    // 'username':['', Validators.required],
    'companyname': ['', Validators.required],
    'address':['', Validators.required],
    'email': ['', Validators.required],
    'websiteurl':['', Validators.required],
    'country':['', [Validators.required, Validators.maxLength(8)]],
    'state':['', Validators.required],
    'city':['',Validators.required],
    'postalcode':['', Validators.required],
    'phonenumber':['', Validators.required],
    'fax':['', Validators.required],
  },
  );
}

onSubmit() {

  //debugger
  this.submitted = true;

  let jsonData = {
    // drawid:this.loginForm.value.draw,
    application_name:this.loginForm.value.applicationname,
    company_name:this.loginForm.value.companyname,
    address:this.loginForm.value.address,
    email:this.loginForm.value.email,
    country_name:this.loginForm.value.country,
    website_url:this.loginForm.value.websiteurl,
    state:this.loginForm.value.state,
    city:this.loginForm.value.city,
    postal_code:this.loginForm.value.postalcode,
    phone_number:this.loginForm.value.phonenumber,
    fax:this.loginForm.value.fax,

  }
  
  this.loader.start();
  this.httpService.settingupdate(jsonData).subscribe(res => {

    this.loader.stop();
    // this.appComponent.startWatching();
    if (res['success'] == true) {
      this.router.navigateByUrl('pages/Settingpage')

    } else if (res['success'] == false) {
      // this.notOKstat = res['UserConfiguration']['ErrorMessage'];
      // this.httpService.toastr.error(res['UserConfiguration']['ErrorMessage']);
      this.httpService.toastr.error(res['message'], '', {
        positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
      });
    }
  },
  (err) => {
    // this.loader.stop();
    this.toastr.error("Please fill the Details");
    // this.httpService.errorCallBack(false);
  });
}

getlist() {
  // //debugger
  this.httpService.setlist().subscribe((res: any) => {

    console.log(res['data'])

    // this.data = res['data']
    this.applicationname= res['data']['0']['application_name']
    this.companyname=res['data']['0']['company_name']
    this.address=res['data']['0']['address']
    this.email=res['data']['0']['email']
    this.websiteurl=res['data']['0']['website_url']
    this.country=res['data']['0']['country_name']
    this.state=res['data']['0']['state']
    this.city=res['data']['0']['city']
    this.postalcode=res['data']['0']['postal_code']
    this.phonenumber=res['data']['0']['phone_number']
    this.fax=res['data']['0']['fax']
        this.fax=res['data']['0']['fax']
    this.sms_sk=res['data']['0']['sms_sk']
    this.sms_ak=res['data']['0']['sms_ak']
    this.email_sk=res['data']['0']['email_sk']
    this.email_ak=res['data']['0']['email_ak']
    this.googleauth_sk=res['data']['0']['googleauth_sk']
    this.googleauth_ak=res['data']['0']['googleauth_ak']
    this.meta_description=res['data']['0']['meta_description']
    this.meta_keywords=res['data']['0']['meta_keywords']

    // this.name = res['data']['draw_id']['name']
    // this.id = res['data']['_id']
    console.log(res['data']['0']['fax'])
    // this.totalLength = this.data.length;

//     if (this.data) {
//       if (this.data.length > 0) {
//     if (res['success'] == true) {
//       this.showDatafound = true;
//     }
//   }
// }
// else {
//   this.showDatafound = false;
//   console.log("No Data found");

// }
  });
}

handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
     let reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
}
handleFile(files: FileList) {
    this.fileToUpload = files.item(0);
     let reader = new FileReader();
    reader.onload = (event: any) => {
      this.FavIcon = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
}
handle(files: FileList) {
    this.fileToUpload = files.item(0);
     let reader = new FileReader();
    reader.onload = (event: any) => {
      this.signin_logo = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
}
uploadFiles( system_logo ) {
        console.log( 'file', system_logo )
        for ( let i = 0; i < system_logo.length; i++ ) {
// this.image=system_logo[i]['name']
            // this.formData.append( "file", system_logo[i], system_logo[i]['name'] );
        }
    }
upload(event) {
  //debugger
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      img: file
    });
    this.form.get('img').updateValueAndValidity()
 }
getsettinglogo1(){
    // this.submitted = true;
//  var formData: any = new FormData();
//     formData.append("img", this.form.get('img').value);

  //debugger
    
     let fileNames = (<HTMLInputElement>document.getElementById("system_logo")).files;
    // var formData = new FormData();
    for (let i = 0; i < fileNames.length; i++) {
      // formData.append("file", fileNames[i]['name']);
            this.image1=fileNames[i]['name']

      console.log(fileNames[i]['name'])
    }
  if(this.image1==0){
  let jsonData = {
//     // system_logo1: "uploads/settings/admin@bitcoinio.com1631169039717.png"
        system_logo1: this.baseApiUrl+ this.image1
// //  system_logo1:"uploads/settings/admin@bitcoinio.com",this.image
  }
    this.httpService.settinglogo1(jsonData).subscribe((res: any) => {
 console.log(res['data']);
  this.toastr.success(res ['message'], "", {
          positionClass: "toast-bottom-right",
          closeButton: true,
          timeOut: 5000,
        });
});
  }
this.getsettinglogo2();
}
getsettinglogo2(){
    // this.submitted = true;
//  var formData: any = new FormData();
//     formData.append("img", this.form.get('img').value);

  //debugger
    
     let fileNames = (<HTMLInputElement>document.getElementById("fav_icon")).files;
    // var formData = new FormData();
    for (let i = 0; i < fileNames.length; i++) {
      // formData.append("file", fileNames[i]['name']);
      this.image2=fileNames[i]['name']
      console.log(fileNames[i]['name'])
    }
  
  let jsonData = {
//     // system_logo1: "uploads/settings/admin@bitcoinio.com1631169039717.png"
        system_logo2: this.baseApiUrl+ this.image2
// //  system_logo1:"uploads/settings/admin@bitcoinio.com",this.image
  }
    this.httpService.settinglogo2(jsonData).subscribe((res: any) => {
 console.log(res['data']);
  this.toastr.success(res ['message'], "", {
          positionClass: "toast-bottom-right",
          closeButton: true,
          timeOut: 5000,
        });
});
}
getsettinglogo3(){
    // this.submitted = true;
//  var formData: any = new FormData();
//     formData.append("img", this.form.get('img').value);

  //debugger
    
     let fileNames = (<HTMLInputElement>document.getElementById("signin_logo")).files;
    // var formData = new FormData();
    for (let i = 0; i < fileNames.length; i++) {
      // formData.append("file", fileNames[i]['name']);
      this.image3=fileNames[i]['name']
      console.log(fileNames[i]['name'])
    }
  
  let jsonData = {
//     // system_logo1: "uploads/settings/admin@bitcoinio.com1631169039717.png"
        sigin_page_logo: this.baseApiUrl+ this.image3
// //  system_logo1:"uploads/settings/admin@bitcoinio.com",this.image
  }
    this.httpService.settinglogo3(jsonData).subscribe((res: any) => {
 console.log(res['data']);
  this.toastr.success(res ['message'], "", {
          positionClass: "toast-bottom-right",
          closeButton: true,
          timeOut: 5000,
        });
});
}

getmeta(){
  let jsonData = {
  meta_description:this.meta.value.description,
   meta_keywords:this.meta.value.keywords,
  }
    this.httpService.getmeta(jsonData).subscribe((res: any) => {
 console.log(res['data']);
         localStorage.setItem("description", JSON.stringify(res['data']['meta_description']));
         localStorage.setItem("keywords", JSON.stringify(res['data']['meta_keywords']));

  this.toastr.success(res ['message'], "", {
          positionClass: "toast-bottom-right",
          closeButton: true,
          timeOut: 5000,
        });
});
}

getsmskey(){
  //debugger
  let jsonData = {
    sms_sk:this.sms.value.sms_sk,
    sms_ak:this.sms.value.sms_ak,
  }

    this.httpService.getsmskey(jsonData).subscribe((res: any) => {
 console.log(res['data']);
 this.toastr.success(res ['message'], "", {
          positionClass: "toast-bottom-right",
          closeButton: true,
          timeOut: 5000,
        });
 });
//  this.getlist();
}
getemailkey(){
  //debugger
  let jsonData = {
    email_sk:this.emailauth.value.email_sk,
    email_ak:this.emailauth.value.email_ak,
  }

    this.httpService.getemailkey(jsonData).subscribe((res: any) => {
 console.log(res['data']);
 this.toastr.success(res ['message'], "", {
          positionClass: "toast-bottom-right",
          closeButton: true,
          timeOut: 5000,
        });
 });
//  this.getlist();
}
getgoogleauth(){
  //debugger
  let jsonData = {
    googleauth_sk:this.googleauth.value.googleauth_sk,
    googleauth_ak:this.googleauth.value.googleauth_ak,
  }

    this.httpService.getgoogleauth(jsonData).subscribe((res: any) => {
 console.log(res['data']);
 this.toastr.success(res ['message'], "", {
          positionClass: "toast-bottom-right",
          closeButton: true,
          timeOut: 5000,
        });
 });
}
  id(id: any) {
    throw new Error('Method not implemented.');
  }
  //Angular Editor
  public config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  }



}
