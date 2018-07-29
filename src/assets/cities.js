const states = [{"value": "AN","label": "Andaman and Nicobar Islands"},
{"value": "AP","label": "Andhra Pradesh"},
{"value": "AR","label": "Arunachal Pradesh"},
{"value": "AS","label": "Assam"},
{"value": "BR","label": "Bihar"},
{"value": "CG","label": "Chandigarh"},
{"value": "CH","label": "Chhattisgarh"},
{"value": "DH","label": "Dadra and Nagar Haveli"},
{"value": "DD","label": "Daman and Diu"},
{"value": "DL","label": "Delhi"},
{"value": "GA","label": "Goa"},
{"value": "GJ","label": "Gujarat"},
{"value": "HR","label": "Haryana"},
{"value": "HP","label": "Himachal Pradesh"},
{"value": "JK","label": "Jammu and Kashmir"},
{"value": "JH","label": "Jharkhand"},
{"value": "KA","label": "Karnataka"},
{"value": "KL","label": "Kerala"},
{"value": "LD","label": "Lakshadweep"},
{"value": "MP","label": "Madhya Pradesh"},
{"value": "MH","label": "Maharashtra"},
{"value": "MN","label": "Manipur"},
{"value": "ML","label": "Meghalaya"},
{"value": "MZ","label": "Mizoram"},
{"value": "NL","label": "Nagaland"},
{"value": "OR","label": "Odisha"},
{"value": "PY","label": "Puducherry"},
{"value": "PB","label": "Punjab"},
{"value": "RJ","label": "Rajasthan"},
{"value": "SK","label": "Sikkim"},
{"value": "TN","label": "Tamil Nadu"},
{"value": "TS","label": "Telangana"},
{"value": "TR","label": "Tripura"},
{"value": "UK","label": "Uttarakhand"},
{"value": "UP","label": "Uttar Pradesh"},
{"value": "WB","label": "West Bengal"}];



const cities = [
    {
        "value": "1",
        "label": "Mumbai",
        "state": "Maharashtra"
    },
    {
        "value": "2",
        "label": "Delhi",
        "state": "Delhi"
    },
    {
        "value": "3",
        "label": "Bengaluru",
        "state": "Karnataka"
    },
    {
        "value": "4",
        "label": "Ahmedabad",
        "state": "Gujarat"
    },
    {
        "value": "5",
        "label": "Hyderabad",
        "state": "Telangana"
    },
    {
        "value": "6",
        "label": "Chennai",
        "state": "Tamil Nadu"
    },
    {
        "value": "7",
        "label": "Kolkata",
        "state": "West Bengal"
    },
    {
        "value": "8",
        "label": "Pune",
        "state": "Maharashtra"
    },
    {
        "value": "9",
        "label": "Jaipur",
        "state": "Rajasthan"
    },
    {
        "value": "10",
        "label": "Surat",
        "state": "Gujarat"
    },
    {
        "value": "11",
        "label": "Lucknow",
        "state": "Uttar Pradesh"
    },
    {
        "value": "12",
        "label": "Kanpur",
        "state": "Uttar Pradesh"
    },
    {
        "value": "13",
        "label": "Nagpur",
        "state": "Maharashtra"
    },
    {
        "value": "14",
        "label": "Patna",
        "state": "Bihar"
    },
    {
        "value": "15",
        "label": "Indore",
        "state": "Madhya Pradesh"
    },
    {
        "value": "16",
        "label": "Thane",
        "state": "Maharashtra"
    },
    {
        "value": "17",
        "label": "Bhopal",
        "state": "Madhya Pradesh"
    },
    {
        "value": "18",
        "label": "Visakhapatnam",
        "state": "Andhra Pradesh"
    },
    {
        "value": "19",
        "label": "Vadodara",
        "state": "Gujarat"
    },
    {
        "value": "20",
        "label": "Firozabad",
        "state": "Uttar Pradesh"
    },
    {
        "value": "21",
        "label": "Ludhiana",
        "state": "Punjab"
    },
    {
        "value": "22",
        "label": "Rajkot",
        "state": "Gujarat"
    },
    {
        "value": "23",
        "label": "Agra",
        "state": "Uttar Pradesh"
    },
    {
        "value": "24",
        "label": "Siliguri",
        "state": "West Bengal"
    },
    {
        "value": "25",
        "label": "Nashik",
        "state": "Maharashtra"
    },
    {
        "value": "26",
        "label": "Faridabad",
        "state": "Haryana"
    },
    {
        "value": "27",
        "label": "Patiala",
        "state": "Punjab"
    },
    {
        "value": "28",
        "label": "Meerut",
        "state": "Uttar Pradesh"
    },
    {
        "value": "29",
        "label": "Kalyan-Dombivali",
        "state": "Maharashtra"
    },
    {
        "value": "30",
        "label": "Vasai-Virar",
        "state": "Maharashtra"
    },
    {
        "value": "31",
        "label": "Varanasi",
        "state": "Uttar Pradesh"
    },
    {
        "value": "32",
        "label": "Srinagar",
        "state": "Jammu and Kashmir"
    },
    {
        "value": "33",
        "label": "Dhanbad",
        "state": "Jharkhand"
    },
    {
        "value": "34",
        "label": "Jodhpur",
        "state": "Rajasthan"
    },
    {
        "value": "35",
        "label": "Amritsar",
        "state": "Punjab"
    },
    {
        "value": "36",
        "label": "Raipur",
        "state": "Chhattisgarh"
    },
    {
        "value": "37",
        "label": "Allahabad",
        "state": "Uttar Pradesh"
    },
    {
        "value": "38",
        "label": "Coimbatore",
        "state": "Tamil Nadu"
    },
    {
        "value": "39",
        "label": "Jabalpur",
        "state": "Madhya Pradesh"
    },
    {
        "value": "40",
        "label": "Gwalior",
        "state": "Madhya Pradesh"
    },
    {
        "value": "41",
        "label": "Vijayawada",
        "state": "Andhra Pradesh"
    },
    {
        "value": "42",
        "label": "Madurai",
        "state": "Tamil Nadu"
    },
    {
        "value": "43",
        "label": "Guwahati",
        "state": "Assam"
    },
    {
        "value": "44",
        "label": "Chandigarh",
        "state": "Chandigarh"
    },
    {
        "value": "45",
        "label": "Hubli-Dharwad",
        "state": "Karnataka"
    },
    {
        "value": "46",
        "label": "Amroha",
        "state": "Uttar Pradesh"
    },
    {
        "value": "47",
        "label": "Moradabad",
        "state": "Uttar Pradesh"
    },
    {
        "value": "48",
        "label": "Gurgaon",
        "state": "Haryana"
    },
    {
        "value": "49",
        "label": "Aligarh",
        "state": "Uttar Pradesh"
    },
    {
        "value": "50",
        "label": "Solapur",
        "state": "Maharashtra"
    },
    {
        "value": "51",
        "label": "Ranchi",
        "state": "Jharkhand"
    },
    {
        "value": "52",
        "label": "Jalandhar",
        "state": "Punjab"
    },
    {
        "value": "53",
        "label": "Tiruchirappalli",
        "state": "Tamil Nadu"
    },
    {
        "value": "54",
        "label": "Bhubaneswar",
        "state": "Odisha"
    },
    {
        "value": "55",
        "label": "Salem",
        "state": "Tamil Nadu"
    },
    {
        "value": "56",
        "label": "Warangal",
        "state": "Telangana"
    },
    {
        "value": "57",
        "label": "Mira-Bhayandar",
        "state": "Maharashtra"
    },
    {
        "value": "58",
        "label": "Thiruvananthapuram",
        "state": "Kerala"
    },
    {
        "value": "59",
        "label": "Bhiwandi",
        "state": "Maharashtra"
    },
    {
        "value": "60",
        "label": "Saharanpur",
        "state": "Uttar Pradesh"
    },
    {
        "value": "61",
        "label": "Guntur",
        "state": "Andhra Pradesh"
    },
    {
        "value": "62",
        "label": "Amravati",
        "state": "Maharashtra"
    },
    {
        "value": "63",
        "label": "Bikaner",
        "state": "Rajasthan"
    },
    {
        "value": "64",
        "label": "Noida",
        "state": "Uttar Pradesh"
    },
    {
        "value": "65",
        "label": "Jamshedpur",
        "state": "Jharkhand"
    },
    {
        "value": "66",
        "label": "Bhilai Nagar",
        "state": "Chhattisgarh"
    },
    {
        "value": "67",
        "label": "Cuttack",
        "state": "Odisha"
    },
    {
        "value": "68",
        "label": "Kochi",
        "state": "Kerala"
    },
    {
        "value": "69",
        "label": "Udaipur",
        "state": "Rajasthan"
    },
    {
        "value": "70",
        "label": "Bhavnagar",
        "state": "Gujarat"
    },
    {
        "value": "71",
        "label": "Dehradun",
        "state": "Uttarakhand"
    },
    {
        "value": "72",
        "label": "Asansol",
        "state": "West Bengal"
    },
    {
        "value": "73",
        "label": "Nanded-Waghala",
        "state": "Maharashtra"
    },
    {
        "value": "74",
        "label": "Ajmer",
        "state": "Rajasthan"
    },
    {
        "value": "75",
        "label": "Jamnagar",
        "state": "Gujarat"
    },
    {
        "value": "76",
        "label": "Ujjain",
        "state": "Madhya Pradesh"
    },
    {
        "value": "77",
        "label": "Sangli",
        "state": "Maharashtra"
    },
    {
        "value": "78",
        "label": "Loni",
        "state": "Uttar Pradesh"
    },
    {
        "value": "79",
        "label": "Jhansi",
        "state": "Uttar Pradesh"
    },
    {
        "value": "80",
        "label": "Pondicherry",
        "state": "Puducherry"
    },
    {
        "value": "81",
        "label": "Nellore",
        "state": "Andhra Pradesh"
    },
    {
        "value": "82",
        "label": "Jammu",
        "state": "Jammu and Kashmir"
    },
    {
        "value": "83",
        "label": "Belagavi",
        "state": "Karnataka"
    },
    {
        "value": "84",
        "label": "Raurkela",
        "state": "Odisha"
    },
    {
        "value": "85",
        "label": "Mangaluru",
        "state": "Karnataka"
    },
    {
        "value": "86",
        "label": "Tirunelveli",
        "state": "Tamil Nadu"
    },
    {
        "value": "87",
        "label": "Malegaon",
        "state": "Maharashtra"
    },
    {
        "value": "88",
        "label": "Gaya",
        "state": "Bihar"
    },
    {
        "value": "89",
        "label": "Tiruppur",
        "state": "Tamil Nadu"
    },
    {
        "value": "90",
        "label": "Davanagere",
        "state": "Karnataka"
    },
    {
        "value": "91",
        "label": "Kozhikode",
        "state": "Kerala"
    },
    {
        "value": "92",
        "label": "Akola",
        "state": "Maharashtra"
    },
    {
        "value": "93",
        "label": "Kurnool",
        "state": "Andhra Pradesh"
    },
    {
        "value": "94",
        "label": "Bokaro Steel City",
        "state": "Jharkhand"
    },
    {
        "value": "95",
        "label": "Rajahmundry",
        "state": "Andhra Pradesh"
    },
    {
        "value": "96",
        "label": "Ballari",
        "state": "Karnataka"
    },
    {
        "value": "97",
        "label": "Agartala",
        "state": "Tripura"
    },
    {
        "value": "98",
        "label": "Bhagalpur",
        "state": "Bihar"
    },
    {
        "value": "99",
        "label": "Latur",
        "state": "Maharashtra"
    },
    {
        "value": "100",
        "label": "Dhule",
        "state": "Maharashtra"
    },
    {
        "value": "101",
        "label": "Korba",
        "state": "Chhattisgarh"
    },
    {
        "value": "102",
        "label": "Bhilwara",
        "state": "Rajasthan"
    },
    {
        "value": "103",
        "label": "Brahmapur",
        "state": "Odisha"
    },
    {
        "value": "104",
        "label": "Mysore",
        "state": "Karnataka"
    },
    {
        "value": "105",
        "label": "Muzaffarpur",
        "state": "Bihar"
    },
    {
        "value": "106",
        "label": "Ahmednagar",
        "state": "Maharashtra"
    },
    {
        "value": "107",
        "label": "Kollam",
        "state": "Kerala"
    },
    {
        "value": "108",
        "label": "Raghunathganj",
        "state": "West Bengal"
    },
    {
        "value": "109",
        "label": "Bilaspur",
        "state": "Chhattisgarh"
    },
    {
        "value": "110",
        "label": "Shahjahanpur",
        "state": "Uttar Pradesh"
    },
    {
        "value": "111",
        "label": "Thrissur",
        "state": "Kerala"
    },
    {
        "value": "112",
        "label": "Alwar",
        "state": "Rajasthan"
    },
    {
        "value": "113",
        "label": "Kakinada",
        "state": "Andhra Pradesh"
    },
    {
        "value": "114",
        "label": "Nizamabad",
        "state": "Telangana"
    },
    {
        "value": "115",
        "label": "Sagar",
        "state": "Madhya Pradesh"
    },
    {
        "value": "116",
        "label": "Tumkur",
        "state": "Karnataka"
    },
    {
        "value": "117",
        "label": "Hisar",
        "state": "Haryana"
    },
    {
        "value": "118",
        "label": "Rohtak",
        "state": "Haryana"
    },
    {
        "value": "119",
        "label": "Panipat",
        "state": "Haryana"
    },
    {
        "value": "120",
        "label": "Darbhanga",
        "state": "Bihar"
    },
    {
        "value": "121",
        "label": "Kharagpur",
        "state": "West Bengal"
    },
    {
        "value": "122",
        "label": "Aizawl",
        "state": "Mizoram"
    },
    {
        "value": "123",
        "label": "Ichalkaranji",
        "state": "Maharashtra"
    },
    {
        "value": "124",
        "label": "Tirupati",
        "state": "Andhra Pradesh"
    },
    {
        "value": "125",
        "label": "Karnal",
        "state": "Haryana"
    },
    {
        "value": "126",
        "label": "Bathinda",
        "state": "Punjab"
    },
    {
        "value": "127",
        "label": "Rampur",
        "state": "Uttar Pradesh"
    },
    {
        "value": "128",
        "label": "Shivamogga",
        "state": "Karnataka"
    },
    {
        "value": "129",
        "label": "Ratlam",
        "state": "Madhya Pradesh"
    },
    {
        "value": "130",
        "label": "Modinagar",
        "state": "Uttar Pradesh"
    },
    {
        "value": "131",
        "label": "Durg",
        "state": "Chhattisgarh"
    },
    {
        "value": "132",
        "label": "Shillong",
        "state": "Meghalaya"
    },
    {
        "value": "133",
        "label": "Imphal",
        "state": "Manipur"
    },
    {
        "value": "134",
        "label": "Hapur",
        "state": "Uttar Pradesh"
    },
    {
        "value": "135",
        "label": "Ranipet",
        "state": "Tamil Nadu"
    },
    {
        "value": "136",
        "label": "Anantapur",
        "state": "Andhra Pradesh"
    },
    {
        "value": "137",
        "label": "Arrah",
        "state": "Bihar"
    },
    {
        "value": "138",
        "label": "Karimnagar",
        "state": "Telangana"
    },
    {
        "value": "139",
        "label": "Parbhani",
        "state": "Maharashtra"
    },
    {
        "value": "140",
        "label": "Etawah",
        "state": "Uttar Pradesh"
    },
    {
        "value": "141",
        "label": "Bharatpur",
        "state": "Rajasthan"
    },
    {
        "value": "142",
        "label": "Begusarai",
        "state": "Bihar"
    },
    {
        "value": "143",
        "label": "New Delhi",
        "state": "Delhi"
    },
    {
        "value": "144",
        "label": "Chhapra",
        "state": "Bihar"
    },
    {
        "value": "145",
        "label": "Kadapa",
        "state": "Andhra Pradesh"
    },
    {
        "value": "146",
        "label": "Ramagundam",
        "state": "Telangana"
    },
    {
        "value": "147",
        "label": "Pali",
        "state": "Rajasthan"
    },
    {
        "value": "148",
        "label": "Satna",
        "state": "Madhya Pradesh"
    },
    {
        "value": "149",
        "label": "Vizianagaram",
        "state": "Andhra Pradesh"
    },
    {
        "value": "150",
        "label": "Katihar",
        "state": "Bihar"
    },
    {
        "value": "151",
        "label": "Hardwar",
        "state": "Uttarakhand"
    },
    {
        "value": "152",
        "label": "Sonipat",
        "state": "Haryana"
    },
    {
        "value": "153",
        "label": "Nagercoil",
        "state": "Tamil Nadu"
    },
    {
        "value": "154",
        "label": "Thanjavur",
        "state": "Tamil Nadu"
    },
    {
        "value": "155",
        "label": "Murwara (Katni)",
        "state": "Madhya Pradesh"
    },
    {
        "value": "156",
        "label": "Naihati",
        "state": "West Bengal"
    },
    {
        "value": "157",
        "label": "Sambhal",
        "state": "Uttar Pradesh"
    },
    {
        "value": "158",
        "label": "Nadiad",
        "state": "Gujarat"
    },
    {
        "value": "159",
        "label": "Yamunanagar",
        "state": "Haryana"
    },
    {
        "value": "160",
        "label": "English Bazar",
        "state": "West Bengal"
    },
    {
        "value": "161",
        "label": "Eluru",
        "state": "Andhra Pradesh"
    },
    {
        "value": "162",
        "label": "Munger",
        "state": "Bihar"
    },
    {
        "value": "163",
        "label": "Panchkula",
        "state": "Haryana"
    },
    {
        "value": "164",
        "label": "Raayachuru",
        "state": "Karnataka"
    },
    {
        "value": "165",
        "label": "Panvel",
        "state": "Maharashtra"
    },
    {
        "value": "166",
        "label": "Deoghar",
        "state": "Jharkhand"
    },
    {
        "value": "167",
        "label": "Ongole",
        "state": "Andhra Pradesh"
    },
    {
        "value": "168",
        "label": "Nandyal",
        "state": "Andhra Pradesh"
    },
    {
        "value": "169",
        "label": "Morena",
        "state": "Madhya Pradesh"
    },
    {
        "value": "170",
        "label": "Bhiwani",
        "state": "Haryana"
    },
    {
        "value": "171",
        "label": "Porbandar",
        "state": "Gujarat"
    },
    {
        "value": "172",
        "label": "Palakkad",
        "state": "Kerala"
    },
    {
        "value": "173",
        "label": "Anand",
        "state": "Gujarat"
    },
    {
        "value": "174",
        "label": "Purnia",
        "state": "Bihar"
    },
    {
        "value": "175",
        "label": "Baharampur",
        "state": "West Bengal"
    },
    {
        "value": "176",
        "label": "Barmer",
        "state": "Rajasthan"
    },
    {
        "value": "177",
        "label": "Morvi",
        "state": "Gujarat"
    },
    {
        "value": "178",
        "label": "Orai",
        "state": "Uttar Pradesh"
    },
    {
        "value": "179",
        "label": "Bahraich",
        "state": "Uttar Pradesh"
    },
    {
        "value": "180",
        "label": "Sikar",
        "state": "Rajasthan"
    },
    {
        "value": "181",
        "label": "Vellore",
        "state": "Tamil Nadu"
    },
    {
        "value": "182",
        "label": "Singrauli",
        "state": "Madhya Pradesh"
    },
    {
        "value": "183",
        "label": "Khammam",
        "state": "Telangana"
    },
    {
        "value": "184",
        "label": "Mahesana",
        "state": "Gujarat"
    },
    {
        "value": "185",
        "label": "Silchar",
        "state": "Assam"
    },
    {
        "value": "186",
        "label": "Sambalpur",
        "state": "Odisha"
    },
    {
        "value": "187",
        "label": "Rewa",
        "state": "Madhya Pradesh"
    },
    {
        "value": "188",
        "label": "Unnao",
        "state": "Uttar Pradesh"
    },
    {
        "value": "189",
        "label": "Hugli-Chinsurah",
        "state": "West Bengal"
    },
    {
        "value": "190",
        "label": "Raiganj",
        "state": "West Bengal"
    },
    {
        "value": "191",
        "label": "Phusro",
        "state": "Jharkhand"
    },
    {
        "value": "192",
        "label": "Adityapur",
        "state": "Jharkhand"
    },
    {
        "value": "193",
        "label": "Alappuzha",
        "state": "Kerala"
    },
    {
        "value": "194",
        "label": "Bahadurgarh",
        "state": "Haryana"
    },
    {
        "value": "195",
        "label": "Machilipatnam",
        "state": "Andhra Pradesh"
    },
    {
        "value": "196",
        "label": "Rae Bareli",
        "state": "Uttar Pradesh"
    },
    {
        "value": "197",
        "label": "Jalpaiguri",
        "state": "West Bengal"
    },
    {
        "value": "198",
        "label": "Bharuch",
        "state": "Gujarat"
    },
    {
        "value": "199",
        "label": "Pathankot",
        "state": "Punjab"
    },
    {
        "value": "200",
        "label": "Hoshiarpur",
        "state": "Punjab"
    },
    {
        "value": "201",
        "label": "Baramula",
        "state": "Jammu and Kashmir"
    },
    {
        "value": "202",
        "label": "Adoni",
        "state": "Andhra Pradesh"
    },
    {
        "value": "203",
        "label": "Jind",
        "state": "Haryana"
    },
    {
        "value": "204",
        "label": "Tonk",
        "state": "Rajasthan"
    },
    {
        "value": "205",
        "label": "Tenali",
        "state": "Andhra Pradesh"
    },
    {
        "value": "206",
        "label": "Kancheepuram",
        "state": "Tamil Nadu"
    },
    {
        "value": "207",
        "label": "Vapi",
        "state": "Gujarat"
    },
    {
        "value": "208",
        "label": "Sirsa",
        "state": "Haryana"
    },
    {
        "value": "209",
        "label": "Navsari",
        "state": "Gujarat"
    },
    {
        "value": "210",
        "label": "Mahbubnagar",
        "state": "Telangana"
    },
    {
        "value": "211",
        "label": "Puri",
        "state": "Odisha"
    },
    {
        "value": "212",
        "label": "Robertson Pet",
        "state": "Karnataka"
    },
    {
        "value": "213",
        "label": "Erode",
        "state": "Tamil Nadu"
    },
    {
        "value": "214",
        "label": "Batala",
        "state": "Punjab"
    },
    {
        "value": "215",
        "label": "Haldwani-cum-Kathgodam",
        "state": "Uttarakhand"
    },
    {
        "value": "216",
        "label": "Vidisha",
        "state": "Madhya Pradesh"
    },
    {
        "value": "217",
        "label": "Saharsa",
        "state": "Bihar"
    },
    {
        "value": "218",
        "label": "Thanesar",
        "state": "Haryana"
    },
    {
        "value": "219",
        "label": "Chittoor",
        "state": "Andhra Pradesh"
    },
    {
        "value": "220",
        "label": "Veraval",
        "state": "Gujarat"
    },
    {
        "value": "221",
        "label": "Lakhimpur",
        "state": "Uttar Pradesh"
    },
    {
        "value": "222",
        "label": "Sitapur",
        "state": "Uttar Pradesh"
    },
    {
        "value": "223",
        "label": "Hindupur",
        "state": "Andhra Pradesh"
    },
    {
        "value": "224",
        "label": "Santipur",
        "state": "West Bengal"
    },
    {
        "value": "225",
        "label": "Balurghat",
        "state": "West Bengal"
    },
    {
        "value": "226",
        "label": "Ganjbasoda",
        "state": "Madhya Pradesh"
    },
    {
        "value": "227",
        "label": "Moga",
        "state": "Punjab"
    },
    {
        "value": "228",
        "label": "Proddatur",
        "state": "Andhra Pradesh"
    },
    {
        "value": "229",
        "label": "Srinagar",
        "state": "Uttarakhand"
    },
    {
        "value": "230",
        "label": "Medinipur",
        "state": "West Bengal"
    },
    {
        "value": "231",
        "label": "Habra",
        "state": "West Bengal"
    },
    {
        "value": "232",
        "label": "Sasaram",
        "state": "Bihar"
    },
    {
        "value": "233",
        "label": "Hajipur",
        "state": "Bihar"
    },
    {
        "value": "234",
        "label": "Bhuj",
        "state": "Gujarat"
    },
    {
        "value": "235",
        "label": "Shivpuri",
        "state": "Madhya Pradesh"
    },
    {
        "value": "236",
        "label": "Ranaghat",
        "state": "West Bengal"
    },
    {
        "value": "237",
        "label": "Shimla",
        "state": "Himachal Pradesh"
    },
    {
        "value": "238",
        "label": "Tiruvannamalai",
        "state": "Tamil Nadu"
    },
    {
        "value": "239",
        "label": "Kaithal",
        "state": "Haryana"
    },
    {
        "value": "240",
        "label": "Rajnandgaon",
        "state": "Chhattisgarh"
    },
    {
        "value": "241",
        "label": "Godhra",
        "state": "Gujarat"
    },
    {
        "value": "242",
        "label": "Hazaribag",
        "state": "Jharkhand"
    },
    {
        "value": "243",
        "label": "Bhimavaram",
        "state": "Andhra Pradesh"
    },
    {
        "value": "244",
        "label": "Mandsaur",
        "state": "Madhya Pradesh"
    },
    {
        "value": "245",
        "label": "Dibrugarh",
        "state": "Assam"
    },
    {
        "value": "246",
        "label": "Kolar",
        "state": "Karnataka"
    },
    {
        "value": "247",
        "label": "Bankura",
        "state": "West Bengal"
    },
    {
        "value": "248",
        "label": "Mandya",
        "state": "Karnataka"
    },
    {
        "value": "249",
        "label": "Dehri-on-Sone",
        "state": "Bihar"
    },
    {
        "value": "250",
        "label": "Madanapalle",
        "state": "Andhra Pradesh"
    },
    {
        "value": "251",
        "label": "Malerkotla",
        "state": "Punjab"
    },
    {
        "value": "252",
        "label": "Lalitpur",
        "state": "Uttar Pradesh"
    },
    {
        "value": "253",
        "label": "Bettiah",
        "state": "Bihar"
    },
    {
        "value": "254",
        "label": "Pollachi",
        "state": "Tamil Nadu"
    },
    {
        "value": "255",
        "label": "Khanna",
        "state": "Punjab"
    },
    {
        "value": "256",
        "label": "Neemuch",
        "state": "Madhya Pradesh"
    },
    {
        "value": "257",
        "label": "Palwal",
        "state": "Haryana"
    },
    {
        "value": "258",
        "label": "Palanpur",
        "state": "Gujarat"
    },
    {
        "value": "259",
        "label": "Guntakal",
        "state": "Andhra Pradesh"
    },
    {
        "value": "260",
        "label": "Nabadwip",
        "state": "West Bengal"
    },
    {
        "value": "261",
        "label": "Udupi",
        "state": "Karnataka"
    },
    {
        "value": "262",
        "label": "Jagdalpur",
        "state": "Chhattisgarh"
    },
    {
        "value": "263",
        "label": "Motihari",
        "state": "Bihar"
    },
    {
        "value": "264",
        "label": "Pilibhit",
        "state": "Uttar Pradesh"
    },
    {
        "value": "265",
        "label": "Dimapur",
        "state": "Nagaland"
    },
    {
        "value": "266",
        "label": "Mohali",
        "state": "Punjab"
    },
    {
        "value": "267",
        "label": "Sadulpur",
        "state": "Rajasthan"
    },
    {
        "value": "268",
        "label": "Rajapalayam",
        "state": "Tamil Nadu"
    },
    {
        "value": "269",
        "label": "Dharmavaram",
        "state": "Andhra Pradesh"
    },
    {
        "value": "270",
        "label": "Kashipur",
        "state": "Uttarakhand"
    },
    {
        "value": "271",
        "label": "Sivakasi",
        "state": "Tamil Nadu"
    },
    {
        "value": "272",
        "label": "Darjiling",
        "state": "West Bengal"
    },
    {
        "value": "273",
        "label": "Chikkamagaluru",
        "state": "Karnataka"
    },
    {
        "value": "274",
        "label": "Gudivada",
        "state": "Andhra Pradesh"
    },
    {
        "value": "275",
        "label": "Baleshwar Town",
        "state": "Odisha"
    },
    {
        "value": "276",
        "label": "Mancherial",
        "state": "Telangana"
    },
    {
        "value": "277",
        "label": "Srikakulam",
        "state": "Andhra Pradesh"
    },
    {
        "value": "278",
        "label": "Adilabad",
        "state": "Telangana"
    },
    {
        "value": "279",
        "label": "Yavatmal",
        "state": "Maharashtra"
    },
    {
        "value": "280",
        "label": "Barnala",
        "state": "Punjab"
    },
    {
        "value": "281",
        "label": "Nagaon",
        "state": "Assam"
    },
    {
        "value": "282",
        "label": "Narasaraopet",
        "state": "Andhra Pradesh"
    },
    {
        "value": "283",
        "label": "Raigarh",
        "state": "Chhattisgarh"
    },
    {
        "value": "284",
        "label": "Roorkee",
        "state": "Uttarakhand"
    },
    {
        "value": "285",
        "label": "Valsad",
        "state": "Gujarat"
    },
    {
        "value": "286",
        "label": "Ambikapur",
        "state": "Chhattisgarh"
    },
    {
        "value": "287",
        "label": "Giridih",
        "state": "Jharkhand"
    },
    {
        "value": "288",
        "label": "Chandausi",
        "state": "Uttar Pradesh"
    },
    {
        "value": "289",
        "label": "Purulia",
        "state": "West Bengal"
    },
    {
        "value": "290",
        "label": "Patan",
        "state": "Gujarat"
    },
    {
        "value": "291",
        "label": "Bagaha",
        "state": "Bihar"
    },
    {
        "value": "292",
        "label": "Hardoi ",
        "state": "Uttar Pradesh"
    },
    {
        "value": "293",
        "label": "Achalpur",
        "state": "Maharashtra"
    },
    {
        "value": "294",
        "label": "Osmanabad",
        "state": "Maharashtra"
    },
    {
        "value": "295",
        "label": "Deesa",
        "state": "Gujarat"
    },
    {
        "value": "296",
        "label": "Nandurbar",
        "state": "Maharashtra"
    },
    {
        "value": "297",
        "label": "Azamgarh",
        "state": "Uttar Pradesh"
    },
    {
        "value": "298",
        "label": "Ramgarh",
        "state": "Jharkhand"
    },
    {
        "value": "299",
        "label": "Firozpur",
        "state": "Punjab"
    },
    {
        "value": "300",
        "label": "Baripada Town",
        "state": "Odisha"
    },
    {
        "value": "301",
        "label": "Karwar",
        "state": "Karnataka"
    },
    {
        "value": "302",
        "label": "Siwan",
        "state": "Bihar"
    },
    {
        "value": "303",
        "label": "Rajampet",
        "state": "Andhra Pradesh"
    },
    {
        "value": "304",
        "label": "Pudukkottai",
        "state": "Tamil Nadu"
    },
    {
        "value": "305",
        "label": "Anantnag",
        "state": "Jammu and Kashmir"
    },
    {
        "value": "306",
        "label": "Tadpatri",
        "state": "Andhra Pradesh"
    },
    {
        "value": "307",
        "label": "Satara",
        "state": "Maharashtra"
    },
    {
        "value": "308",
        "label": "Bhadrak",
        "state": "Odisha"
    },
    {
        "value": "309",
        "label": "Kishanganj",
        "state": "Bihar"
    },
    {
        "value": "310",
        "label": "Suryapet",
        "state": "Telangana"
    },
    {
        "value": "311",
        "label": "Wardha",
        "state": "Maharashtra"
    },
    {
        "value": "312",
        "label": "Ranebennuru",
        "state": "Karnataka"
    },
    {
        "value": "313",
        "label": "Amreli",
        "state": "Gujarat"
    },
    {
        "value": "314",
        "label": "Neyveli (TS)",
        "state": "Tamil Nadu"
    },
    {
        "value": "315",
        "label": "Jamalpur",
        "state": "Bihar"
    },
    {
        "value": "316",
        "label": "Marmagao",
        "state": "Goa"
    },
    {
        "value": "317",
        "label": "Udgir",
        "state": "Maharashtra"
    },
    {
        "value": "318",
        "label": "Tadepalligudem",
        "state": "Andhra Pradesh"
    },
    {
        "value": "319",
        "label": "Nagapattinam",
        "state": "Tamil Nadu"
    },
    {
        "value": "320",
        "label": "Buxar",
        "state": "Bihar"
    },
    {
        "value": "321",
        "label": "Aurangabad",
        "state": "Maharashtra"
    },
    {
        "value": "322",
        "label": "Jehanabad",
        "state": "Bihar"
    },
    {
        "value": "323",
        "label": "Phagwara",
        "state": "Punjab"
    },
    {
        "value": "324",
        "label": "Khair",
        "state": "Uttar Pradesh"
    },
    {
        "value": "325",
        "label": "Sawai Madhopur",
        "state": "Rajasthan"
    },
    {
        "value": "326",
        "label": "Kapurthala",
        "state": "Punjab"
    },
    {
        "value": "327",
        "label": "Chilakaluripet",
        "state": "Andhra Pradesh"
    },
    {
        "value": "328",
        "label": "Aurangabad",
        "state": "Bihar"
    },
    {
        "value": "329",
        "label": "Malappuram",
        "state": "Kerala"
    },
    {
        "value": "330",
        "label": "Rewari",
        "state": "Haryana"
    },
    {
        "value": "331",
        "label": "Nagaur",
        "state": "Rajasthan"
    },
    {
        "value": "332",
        "label": "Sultanpur",
        "state": "Uttar Pradesh"
    },
    {
        "value": "333",
        "label": "Nagda",
        "state": "Madhya Pradesh"
    },
    {
        "value": "334",
        "label": "Port Blair",
        "state": "Andaman and Nicobar Islands"
    },
    {
        "value": "335",
        "label": "Lakhisarai",
        "state": "Bihar"
    },
    {
        "value": "336",
        "label": "Panaji",
        "state": "Goa"
    },
    {
        "value": "337",
        "label": "Tinsukia",
        "state": "Assam"
    },
    {
        "value": "338",
        "label": "Itarsi",
        "state": "Madhya Pradesh"
    },
    {
        "value": "339",
        "label": "Kohima",
        "state": "Nagaland"
    },
    {
        "value": "340",
        "label": "Balangir",
        "state": "Odisha"
    },
    {
        "value": "341",
        "label": "Nawada",
        "state": "Bihar"
    },
    {
        "value": "342",
        "label": "Jharsuguda",
        "state": "Odisha"
    },
    {
        "value": "343",
        "label": "Jagtial",
        "state": "Telangana"
    },
    {
        "value": "344",
        "label": "Viluppuram",
        "state": "Tamil Nadu"
    },
    {
        "value": "345",
        "label": "Amalner",
        "state": "Maharashtra"
    },
    {
        "value": "346",
        "label": "Zirakpur",
        "state": "Punjab"
    },
    {
        "value": "347",
        "label": "Tanda",
        "state": "Uttar Pradesh"
    },
    {
        "value": "348",
        "label": "Tiruchengode",
        "state": "Tamil Nadu"
    },
    {
        "value": "349",
        "label": "Nagina",
        "state": "Uttar Pradesh"
    },
    {
        "value": "350",
        "label": "Yemmiganur",
        "state": "Andhra Pradesh"
    },
    {
        "value": "351",
        "label": "Vaniyambadi",
        "state": "Tamil Nadu"
    },
    {
        "value": "352",
        "label": "Sarni",
        "state": "Madhya Pradesh"
    },
    {
        "value": "353",
        "label": "Theni Allinagaram",
        "state": "Tamil Nadu"
    },
    {
        "value": "354",
        "label": "Margao",
        "state": "Goa"
    },
    {
        "value": "355",
        "label": "Akot",
        "state": "Maharashtra"
    },
    {
        "value": "356",
        "label": "Sehore",
        "state": "Madhya Pradesh"
    },
    {
        "value": "357",
        "label": "Mhow Cantonment",
        "state": "Madhya Pradesh"
    },
    {
        "value": "358",
        "label": "Kot Kapura",
        "state": "Punjab"
    },
    {
        "value": "359",
        "label": "Makrana",
        "state": "Rajasthan"
    },
    {
        "value": "360",
        "label": "Pandharpur",
        "state": "Maharashtra"
    },
    {
        "value": "361",
        "label": "Miryalaguda",
        "state": "Telangana"
    },
    {
        "value": "362",
        "label": "Shamli",
        "state": "Uttar Pradesh"
    },
    {
        "value": "363",
        "label": "Seoni",
        "state": "Madhya Pradesh"
    },
    {
        "value": "364",
        "label": "Ranibennur",
        "state": "Karnataka"
    },
    {
        "value": "365",
        "label": "Kadiri",
        "state": "Andhra Pradesh"
    },
    {
        "value": "366",
        "label": "Shrirampur",
        "state": "Maharashtra"
    },
    {
        "value": "367",
        "label": "Rudrapur",
        "state": "Uttarakhand"
    },
    {
        "value": "368",
        "label": "Parli",
        "state": "Maharashtra"
    },
    {
        "value": "369",
        "label": "Najibabad",
        "state": "Uttar Pradesh"
    },
    {
        "value": "370",
        "label": "Nirmal",
        "state": "Telangana"
    },
    {
        "value": "371",
        "label": "Udhagamandalam",
        "state": "Tamil Nadu"
    },
    {
        "value": "372",
        "label": "Shikohabad",
        "state": "Uttar Pradesh"
    },
    {
        "value": "373",
        "label": "Jhumri Tilaiya",
        "state": "Jharkhand"
    },
    {
        "value": "374",
        "label": "Aruppukkottai",
        "state": "Tamil Nadu"
    },
    {
        "value": "375",
        "label": "Ponnani",
        "state": "Kerala"
    },
    {
        "value": "376",
        "label": "Jamui",
        "state": "Bihar"
    },
    {
        "value": "377",
        "label": "Sitamarhi",
        "state": "Bihar"
    },
    {
        "value": "378",
        "label": "Chirala",
        "state": "Andhra Pradesh"
    },
    {
        "value": "379",
        "label": "Anjar",
        "state": "Gujarat"
    },
    {
        "value": "380",
        "label": "Karaikal",
        "state": "Puducherry"
    },
    {
        "value": "381",
        "label": "Hansi",
        "state": "Haryana"
    },
    {
        "value": "382",
        "label": "Anakapalle",
        "state": "Andhra Pradesh"
    },
    {
        "value": "383",
        "label": "Mahasamund",
        "state": "Chhattisgarh"
    },
    {
        "value": "384",
        "label": "Faridkot",
        "state": "Punjab"
    },
    {
        "value": "385",
        "label": "Saunda",
        "state": "Jharkhand"
    },
    {
        "value": "386",
        "label": "Dhoraji",
        "state": "Gujarat"
    },
    {
        "value": "387",
        "label": "Paramakudi",
        "state": "Tamil Nadu"
    },
    {
        "value": "388",
        "label": "Balaghat",
        "state": "Madhya Pradesh"
    },
    {
        "value": "389",
        "label": "Sujangarh",
        "state": "Rajasthan"
    },
    {
        "value": "390",
        "label": "Khambhat",
        "state": "Gujarat"
    },
    {
        "value": "391",
        "label": "Muktsar",
        "state": "Punjab"
    },
    {
        "value": "392",
        "label": "Rajpura",
        "state": "Punjab"
    },
    {
        "value": "393",
        "label": "Kavali",
        "state": "Andhra Pradesh"
    },
    {
        "value": "394",
        "label": "Dhamtari",
        "state": "Chhattisgarh"
    },
    {
        "value": "395",
        "label": "Ashok Nagar",
        "state": "Madhya Pradesh"
    },
    {
        "value": "396",
        "label": "Sardarshahar",
        "state": "Rajasthan"
    },
    {
        "value": "397",
        "label": "Mahuva",
        "state": "Gujarat"
    },
    {
        "value": "398",
        "label": "Bargarh",
        "state": "Odisha"
    },
    {
        "value": "399",
        "label": "Kamareddy",
        "state": "Telangana"
    },
    {
        "value": "400",
        "label": "Sahibganj",
        "state": "Jharkhand"
    },
    {
        "value": "401",
        "label": "Kothagudem",
        "state": "Telangana"
    },
    {
        "value": "402",
        "label": "Ramanagaram",
        "state": "Karnataka"
    },
    {
        "value": "403",
        "label": "Gokak",
        "state": "Karnataka"
    },
    {
        "value": "404",
        "label": "Tikamgarh",
        "state": "Madhya Pradesh"
    },
    {
        "value": "405",
        "label": "Araria",
        "state": "Bihar"
    },
    {
        "value": "406",
        "label": "Rishikesh",
        "state": "Uttarakhand"
    },
    {
        "value": "407",
        "label": "Shahdol",
        "state": "Madhya Pradesh"
    },
    {
        "value": "408",
        "label": "Medininagar (Daltonganj)",
        "state": "Jharkhand"
    },
    {
        "value": "409",
        "label": "Arakkonam",
        "state": "Tamil Nadu"
    },
    {
        "value": "410",
        "label": "Washim",
        "state": "Maharashtra"
    },
    {
        "value": "411",
        "label": "Sangrur",
        "state": "Punjab"
    },
    {
        "value": "412",
        "label": "Bodhan",
        "state": "Telangana"
    },
    {
        "value": "413",
        "label": "Fazilka",
        "state": "Punjab"
    },
    {
        "value": "414",
        "label": "Palacole",
        "state": "Andhra Pradesh"
    },
    {
        "value": "415",
        "label": "Keshod",
        "state": "Gujarat"
    },
    {
        "value": "416",
        "label": "Sullurpeta",
        "state": "Andhra Pradesh"
    },
    {
        "value": "417",
        "label": "Wadhwan",
        "state": "Gujarat"
    },
    {
        "value": "418",
        "label": "Gurdaspur",
        "state": "Punjab"
    },
    {
        "value": "419",
        "label": "Vatakara",
        "state": "Kerala"
    },
    {
        "value": "420",
        "label": "Tura",
        "state": "Meghalaya"
    },
    {
        "value": "421",
        "label": "Narnaul",
        "state": "Haryana"
    },
    {
        "value": "422",
        "label": "Kharar",
        "state": "Punjab"
    },
    {
        "value": "423",
        "label": "Yadgir",
        "state": "Karnataka"
    },
    {
        "value": "424",
        "label": "Ambejogai",
        "state": "Maharashtra"
    },
    {
        "value": "425",
        "label": "Ankleshwar",
        "state": "Gujarat"
    },
    {
        "value": "426",
        "label": "Savarkundla",
        "state": "Gujarat"
    },
    {
        "value": "427",
        "label": "Paradip",
        "state": "Odisha"
    },
    {
        "value": "428",
        "label": "Virudhachalam",
        "state": "Tamil Nadu"
    },
    {
        "value": "429",
        "label": "Kanhangad",
        "state": "Kerala"
    },
    {
        "value": "430",
        "label": "Kadi",
        "state": "Gujarat"
    },
    {
        "value": "431",
        "label": "Srivilliputhur",
        "state": "Tamil Nadu"
    },
    {
        "value": "432",
        "label": "Gobindgarh",
        "state": "Punjab"
    },
    {
        "value": "433",
        "label": "Tindivanam",
        "state": "Tamil Nadu"
    },
    {
        "value": "434",
        "label": "Mansa",
        "state": "Punjab"
    },
    {
        "value": "435",
        "label": "Taliparamba",
        "state": "Kerala"
    },
    {
        "value": "436",
        "label": "Manmad",
        "state": "Maharashtra"
    },
    {
        "value": "437",
        "label": "Tanuku",
        "state": "Andhra Pradesh"
    },
    {
        "value": "438",
        "label": "Rayachoti",
        "state": "Andhra Pradesh"
    },
    {
        "value": "439",
        "label": "Virudhunagar",
        "state": "Tamil Nadu"
    },
    {
        "value": "440",
        "label": "Koyilandy",
        "state": "Kerala"
    },
    {
        "value": "441",
        "label": "Jorhat",
        "state": "Assam"
    },
    {
        "value": "442",
        "label": "Karur",
        "state": "Tamil Nadu"
    },
    {
        "value": "443",
        "label": "Valparai",
        "state": "Tamil Nadu"
    },
    {
        "value": "444",
        "label": "Srikalahasti",
        "state": "Andhra Pradesh"
    },
    {
        "value": "445",
        "label": "Neyyattinkara",
        "state": "Kerala"
    },
    {
        "value": "446",
        "label": "Bapatla",
        "state": "Andhra Pradesh"
    },
    {
        "value": "447",
        "label": "Fatehabad",
        "state": "Haryana"
    },
    {
        "value": "448",
        "label": "Malout",
        "state": "Punjab"
    },
    {
        "value": "449",
        "label": "Sankarankovil",
        "state": "Tamil Nadu"
    },
    {
        "value": "450",
        "label": "Tenkasi",
        "state": "Tamil Nadu"
    },
    {
        "value": "451",
        "label": "Ratnagiri",
        "state": "Maharashtra"
    },
    {
        "value": "452",
        "label": "Rabkavi Banhatti",
        "state": "Karnataka"
    },
    {
        "value": "453",
        "label": "Sikandrabad",
        "state": "Uttar Pradesh"
    },
    {
        "value": "454",
        "label": "Chaibasa",
        "state": "Jharkhand"
    },
    {
        "value": "455",
        "label": "Chirmiri",
        "state": "Chhattisgarh"
    },
    {
        "value": "456",
        "label": "Palwancha",
        "state": "Telangana"
    },
    {
        "value": "457",
        "label": "Bhawanipatna",
        "state": "Odisha"
    },
    {
        "value": "458",
        "label": "Kayamkulam",
        "state": "Kerala"
    },
    {
        "value": "459",
        "label": "Pithampur",
        "state": "Madhya Pradesh"
    },
    {
        "value": "460",
        "label": "Nabha",
        "state": "Punjab"
    },
    {
        "value": "461",
        "label": "Shahabad, Hardoi",
        "state": "Uttar Pradesh"
    },
    {
        "value": "462",
        "label": "Dhenkanal",
        "state": "Odisha"
    },
    {
        "value": "463",
        "label": "Uran Islampur",
        "state": "Maharashtra"
    },
    {
        "value": "464",
        "label": "Gopalganj",
        "state": "Bihar"
    },
    {
        "value": "465",
        "label": "Bongaigaon City",
        "state": "Assam"
    },
    {
        "value": "466",
        "label": "Palani",
        "state": "Tamil Nadu"
    },
    {
        "value": "467",
        "label": "Pusad",
        "state": "Maharashtra"
    },
    {
        "value": "468",
        "label": "Sopore",
        "state": "Jammu and Kashmir"
    },
    {
        "value": "469",
        "label": "Pilkhuwa",
        "state": "Uttar Pradesh"
    },
    {
        "value": "470",
        "label": "Tarn Taran",
        "state": "Punjab"
    },
    {
        "value": "471",
        "label": "Renukoot",
        "state": "Uttar Pradesh"
    },
    {
        "value": "472",
        "label": "Mandamarri",
        "state": "Telangana"
    },
    {
        "value": "473",
        "label": "Shahabad",
        "state": "Karnataka"
    },
    {
        "value": "474",
        "label": "Barbil",
        "state": "Odisha"
    },
    {
        "value": "475",
        "label": "Koratla",
        "state": "Telangana"
    },
    {
        "value": "476",
        "label": "Madhubani",
        "state": "Bihar"
    },
    {
        "value": "477",
        "label": "Arambagh",
        "state": "West Bengal"
    },
    {
        "value": "478",
        "label": "Gohana",
        "state": "Haryana"
    },
    {
        "value": "479",
        "label": "Ladnu",
        "state": "Rajasthan"
    },
    {
        "value": "480",
        "label": "Pattukkottai",
        "state": "Tamil Nadu"
    },
    {
        "value": "481",
        "label": "Sirsi",
        "state": "Karnataka"
    },
    {
        "value": "482",
        "label": "Sircilla",
        "state": "Telangana"
    },
    {
        "value": "483",
        "label": "Tamluk",
        "state": "West Bengal"
    },
    {
        "value": "484",
        "label": "Jagraon",
        "state": "Punjab"
    },
    {
        "value": "485",
        "label": "AlipurdUrban Agglomerationr",
        "state": "West Bengal"
    },
    {
        "value": "486",
        "label": "Alirajpur",
        "state": "Madhya Pradesh"
    },
    {
        "value": "487",
        "label": "Tandur",
        "state": "Telangana"
    },
    {
        "value": "488",
        "label": "Naidupet",
        "state": "Andhra Pradesh"
    },
    {
        "value": "489",
        "label": "Tirupathur",
        "state": "Tamil Nadu"
    },
    {
        "value": "490",
        "label": "Tohana",
        "state": "Haryana"
    },
    {
        "value": "491",
        "label": "Ratangarh",
        "state": "Rajasthan"
    },
    {
        "value": "492",
        "label": "Dhubri",
        "state": "Assam"
    },
    {
        "value": "493",
        "label": "Masaurhi",
        "state": "Bihar"
    },
    {
        "value": "494",
        "label": "Visnagar",
        "state": "Gujarat"
    },
    {
        "value": "495",
        "label": "Vrindavan",
        "state": "Uttar Pradesh"
    },
    {
        "value": "496",
        "label": "Nokha",
        "state": "Rajasthan"
    },
    {
        "value": "497",
        "label": "Nagari",
        "state": "Andhra Pradesh"
    },
    {
        "value": "498",
        "label": "Narwana",
        "state": "Haryana"
    },
    {
        "value": "499",
        "label": "Ramanathapuram",
        "state": "Tamil Nadu"
    },
    {
        "value": "500",
        "label": "Ujhani",
        "state": "Uttar Pradesh"
    },
    {
        "value": "501",
        "label": "Samastipur",
        "state": "Bihar"
    },
    {
        "value": "502",
        "label": "Laharpur",
        "state": "Uttar Pradesh"
    },
    {
        "value": "503",
        "label": "Sangamner",
        "state": "Maharashtra"
    },
    {
        "value": "504",
        "label": "Nimbahera",
        "state": "Rajasthan"
    },
    {
        "value": "505",
        "label": "Siddipet",
        "state": "Telangana"
    },
    {
        "value": "506",
        "label": "Suri",
        "state": "West Bengal"
    },
    {
        "value": "507",
        "label": "Diphu",
        "state": "Assam"
    },
    {
        "value": "508",
        "label": "Jhargram",
        "state": "West Bengal"
    },
    {
        "value": "509",
        "label": "Shirpur-Warwade",
        "state": "Maharashtra"
    },
    {
        "value": "510",
        "label": "Tilhar",
        "state": "Uttar Pradesh"
    },
    {
        "value": "511",
        "label": "Sindhnur",
        "state": "Karnataka"
    },
    {
        "value": "512",
        "label": "Udumalaipettai",
        "state": "Tamil Nadu"
    },
    {
        "value": "513",
        "label": "Malkapur",
        "state": "Maharashtra"
    },
    {
        "value": "514",
        "label": "Wanaparthy",
        "state": "Telangana"
    },
    {
        "value": "515",
        "label": "Gudur",
        "state": "Andhra Pradesh"
    },
    {
        "value": "516",
        "label": "Kendujhar",
        "state": "Odisha"
    },
    {
        "value": "517",
        "label": "Mandla",
        "state": "Madhya Pradesh"
    },
    {
        "value": "518",
        "label": "Mandi",
        "state": "Himachal Pradesh"
    },
    {
        "value": "519",
        "label": "Nedumangad",
        "state": "Kerala"
    },
    {
        "value": "520",
        "label": "North Lakhimpur",
        "state": "Assam"
    },
    {
        "value": "521",
        "label": "Vinukonda",
        "state": "Andhra Pradesh"
    },
    {
        "value": "522",
        "label": "Tiptur",
        "state": "Karnataka"
    },
    {
        "value": "523",
        "label": "Gobichettipalayam",
        "state": "Tamil Nadu"
    },
    {
        "value": "524",
        "label": "Sunabeda",
        "state": "Odisha"
    },
    {
        "value": "525",
        "label": "Wani",
        "state": "Maharashtra"
    },
    {
        "value": "526",
        "label": "Upleta",
        "state": "Gujarat"
    },
    {
        "value": "527",
        "label": "Narasapuram",
        "state": "Andhra Pradesh"
    },
    {
        "value": "528",
        "label": "Nuzvid",
        "state": "Andhra Pradesh"
    },
    {
        "value": "529",
        "label": "Tezpur",
        "state": "Assam"
    },
    {
        "value": "530",
        "label": "Una",
        "state": "Gujarat"
    },
    {
        "value": "531",
        "label": "Markapur",
        "state": "Andhra Pradesh"
    },
    {
        "value": "532",
        "label": "Sheopur",
        "state": "Madhya Pradesh"
    },
    {
        "value": "533",
        "label": "Thiruvarur",
        "state": "Tamil Nadu"
    },
    {
        "value": "534",
        "label": "Sidhpur",
        "state": "Gujarat"
    },
    {
        "value": "535",
        "label": "Sahaswan",
        "state": "Uttar Pradesh"
    },
    {
        "value": "536",
        "label": "Suratgarh",
        "state": "Rajasthan"
    },
    {
        "value": "537",
        "label": "Shajapur",
        "state": "Madhya Pradesh"
    },
    {
        "value": "538",
        "label": "Rayagada",
        "state": "Odisha"
    },
    {
        "value": "539",
        "label": "Lonavla",
        "state": "Maharashtra"
    },
    {
        "value": "540",
        "label": "Ponnur",
        "state": "Andhra Pradesh"
    },
    {
        "value": "541",
        "label": "Kagaznagar",
        "state": "Telangana"
    },
    {
        "value": "542",
        "label": "Gadwal",
        "state": "Telangana"
    },
    {
        "value": "543",
        "label": "Bhatapara",
        "state": "Chhattisgarh"
    },
    {
        "value": "544",
        "label": "Kandukur",
        "state": "Andhra Pradesh"
    },
    {
        "value": "545",
        "label": "Sangareddy",
        "state": "Telangana"
    },
    {
        "value": "546",
        "label": "Unjha",
        "state": "Gujarat"
    },
    {
        "value": "547",
        "label": "Lunglei",
        "state": "Mizoram"
    },
    {
        "value": "548",
        "label": "Karimganj",
        "state": "Assam"
    },
    {
        "value": "549",
        "label": "Kannur",
        "state": "Kerala"
    },
    {
        "value": "550",
        "label": "Bobbili",
        "state": "Andhra Pradesh"
    },
    {
        "value": "551",
        "label": "Mokameh",
        "state": "Bihar"
    },
    {
        "value": "552",
        "label": "Talegaon Dabhade",
        "state": "Maharashtra"
    },
    {
        "value": "553",
        "label": "Anjangaon",
        "state": "Maharashtra"
    },
    {
        "value": "554",
        "label": "Mangrol",
        "state": "Gujarat"
    },
    {
        "value": "555",
        "label": "Sunam",
        "state": "Punjab"
    },
    {
        "value": "556",
        "label": "Gangarampur",
        "state": "West Bengal"
    },
    {
        "value": "557",
        "label": "Thiruvallur",
        "state": "Tamil Nadu"
    },
    {
        "value": "558",
        "label": "Tirur",
        "state": "Kerala"
    },
    {
        "value": "559",
        "label": "Rath",
        "state": "Uttar Pradesh"
    },
    {
        "value": "560",
        "label": "Jatani",
        "state": "Odisha"
    },
    {
        "value": "561",
        "label": "Viramgam",
        "state": "Gujarat"
    },
    {
        "value": "562",
        "label": "Rajsamand",
        "state": "Rajasthan"
    },
    {
        "value": "563",
        "label": "Yanam",
        "state": "Puducherry"
    },
    {
        "value": "564",
        "label": "Kottayam",
        "state": "Kerala"
    },
    {
        "value": "565",
        "label": "Panruti",
        "state": "Tamil Nadu"
    },
    {
        "value": "566",
        "label": "Dhuri",
        "state": "Punjab"
    },
    {
        "value": "567",
        "label": "Namakkal",
        "state": "Tamil Nadu"
    },
    {
        "value": "568",
        "label": "Kasaragod",
        "state": "Kerala"
    },
    {
        "value": "569",
        "label": "Modasa",
        "state": "Gujarat"
    },
    {
        "value": "570",
        "label": "Rayadurg",
        "state": "Andhra Pradesh"
    },
    {
        "value": "571",
        "label": "Supaul",
        "state": "Bihar"
    },
    {
        "value": "572",
        "label": "Kunnamkulam",
        "state": "Kerala"
    },
    {
        "value": "573",
        "label": "Umred",
        "state": "Maharashtra"
    },
    {
        "value": "574",
        "label": "Bellampalle",
        "state": "Telangana"
    },
    {
        "value": "575",
        "label": "Sibsagar",
        "state": "Assam"
    },
    {
        "value": "576",
        "label": "Mandi Dabwali",
        "state": "Haryana"
    },
    {
        "value": "577",
        "label": "Ottappalam",
        "state": "Kerala"
    },
    {
        "value": "578",
        "label": "Dumraon",
        "state": "Bihar"
    },
    {
        "value": "579",
        "label": "Samalkot",
        "state": "Andhra Pradesh"
    },
    {
        "value": "580",
        "label": "Jaggaiahpet",
        "state": "Andhra Pradesh"
    },
    {
        "value": "581",
        "label": "Goalpara",
        "state": "Assam"
    },
    {
        "value": "582",
        "label": "Tuni",
        "state": "Andhra Pradesh"
    },
    {
        "value": "583",
        "label": "Lachhmangarh",
        "state": "Rajasthan"
    },
    {
        "value": "584",
        "label": "Bhongir",
        "state": "Telangana"
    },
    {
        "value": "585",
        "label": "Amalapuram",
        "state": "Andhra Pradesh"
    },
    {
        "value": "586",
        "label": "Firozpur Cantt.",
        "state": "Punjab"
    },
    {
        "value": "587",
        "label": "Vikarabad",
        "state": "Telangana"
    },
    {
        "value": "588",
        "label": "Thiruvalla",
        "state": "Kerala"
    },
    {
        "value": "589",
        "label": "Sherkot",
        "state": "Uttar Pradesh"
    },
    {
        "value": "590",
        "label": "Palghar",
        "state": "Maharashtra"
    },
    {
        "value": "591",
        "label": "Shegaon",
        "state": "Maharashtra"
    },
    {
        "value": "592",
        "label": "Jangaon",
        "state": "Telangana"
    },
    {
        "value": "593",
        "label": "Bheemunipatnam",
        "state": "Andhra Pradesh"
    },
    {
        "value": "594",
        "label": "Panna",
        "state": "Madhya Pradesh"
    },
    {
        "value": "595",
        "label": "Thodupuzha",
        "state": "Kerala"
    },
    {
        "value": "596",
        "label": "KathUrban Agglomeration",
        "state": "Jammu and Kashmir"
    },
    {
        "value": "597",
        "label": "Palitana",
        "state": "Gujarat"
    },
    {
        "value": "598",
        "label": "Arwal",
        "state": "Bihar"
    },
    {
        "value": "599",
        "label": "Venkatagiri",
        "state": "Andhra Pradesh"
    },
    {
        "value": "600",
        "label": "Kalpi",
        "state": "Uttar Pradesh"
    },
    {
        "value": "601",
        "label": "Rajgarh (Churu)",
        "state": "Rajasthan"
    },
    {
        "value": "602",
        "label": "Sattenapalle",
        "state": "Andhra Pradesh"
    },
    {
        "value": "603",
        "label": "Arsikere",
        "state": "Karnataka"
    },
    {
        "value": "604",
        "label": "Ozar",
        "state": "Maharashtra"
    },
    {
        "value": "605",
        "label": "Thirumangalam",
        "state": "Tamil Nadu"
    },
    {
        "value": "606",
        "label": "Petlad",
        "state": "Gujarat"
    },
    {
        "value": "607",
        "label": "Nasirabad",
        "state": "Rajasthan"
    },
    {
        "value": "608",
        "label": "Phaltan",
        "state": "Maharashtra"
    },
    {
        "value": "609",
        "label": "Rampurhat",
        "state": "West Bengal"
    },
    {
        "value": "610",
        "label": "Nanjangud",
        "state": "Karnataka"
    },
    {
        "value": "611",
        "label": "Forbesganj",
        "state": "Bihar"
    },
    {
        "value": "612",
        "label": "Tundla",
        "state": "Uttar Pradesh"
    },
    {
        "value": "613",
        "label": "BhabUrban Agglomeration",
        "state": "Bihar"
    },
    {
        "value": "614",
        "label": "Sagara",
        "state": "Karnataka"
    },
    {
        "value": "615",
        "label": "Pithapuram",
        "state": "Andhra Pradesh"
    },
    {
        "value": "616",
        "label": "Sira",
        "state": "Karnataka"
    },
    {
        "value": "617",
        "label": "Bhadrachalam",
        "state": "Telangana"
    },
    {
        "value": "618",
        "label": "Charkhi Dadri",
        "state": "Haryana"
    },
    {
        "value": "619",
        "label": "Chatra",
        "state": "Jharkhand"
    },
    {
        "value": "620",
        "label": "Palasa Kasibugga",
        "state": "Andhra Pradesh"
    },
    {
        "value": "621",
        "label": "Nohar",
        "state": "Rajasthan"
    },
    {
        "value": "622",
        "label": "Yevla",
        "state": "Maharashtra"
    },
    {
        "value": "623",
        "label": "Sirhind Fatehgarh Sahib",
        "state": "Punjab"
    },
    {
        "value": "624",
        "label": "Bhainsa",
        "state": "Telangana"
    },
    {
        "value": "625",
        "label": "Parvathipuram",
        "state": "Andhra Pradesh"
    },
    {
        "value": "626",
        "label": "Shahade",
        "state": "Maharashtra"
    },
    {
        "value": "627",
        "label": "Chalakudy",
        "state": "Kerala"
    },
    {
        "value": "628",
        "label": "Narkatiaganj",
        "state": "Bihar"
    },
    {
        "value": "629",
        "label": "Kapadvanj",
        "state": "Gujarat"
    },
    {
        "value": "630",
        "label": "Macherla",
        "state": "Andhra Pradesh"
    },
    {
        "value": "631",
        "label": "Raghogarh-Vijaypur",
        "state": "Madhya Pradesh"
    },
    {
        "value": "632",
        "label": "Rupnagar",
        "state": "Punjab"
    },
    {
        "value": "633",
        "label": "Naugachhia",
        "state": "Bihar"
    },
    {
        "value": "634",
        "label": "Sendhwa",
        "state": "Madhya Pradesh"
    },
    {
        "value": "635",
        "label": "Byasanagar",
        "state": "Odisha"
    },
    {
        "value": "636",
        "label": "Sandila",
        "state": "Uttar Pradesh"
    },
    {
        "value": "637",
        "label": "Gooty",
        "state": "Andhra Pradesh"
    },
    {
        "value": "638",
        "label": "Salur",
        "state": "Andhra Pradesh"
    },
    {
        "value": "639",
        "label": "Nanpara",
        "state": "Uttar Pradesh"
    },
    {
        "value": "640",
        "label": "Sardhana",
        "state": "Uttar Pradesh"
    },
    {
        "value": "641",
        "label": "Vita",
        "state": "Maharashtra"
    },
    {
        "value": "642",
        "label": "Gumia",
        "state": "Jharkhand"
    },
    {
        "value": "643",
        "label": "Puttur",
        "state": "Karnataka"
    },
    {
        "value": "644",
        "label": "Jalandhar Cantt.",
        "state": "Punjab"
    },
    {
        "value": "645",
        "label": "Nehtaur",
        "state": "Uttar Pradesh"
    },
    {
        "value": "646",
        "label": "Changanassery",
        "state": "Kerala"
    },
    {
        "value": "647",
        "label": "Mandapeta",
        "state": "Andhra Pradesh"
    },
    {
        "value": "648",
        "label": "Dumka",
        "state": "Jharkhand"
    },
    {
        "value": "649",
        "label": "Seohara",
        "state": "Uttar Pradesh"
    },
    {
        "value": "650",
        "label": "Umarkhed",
        "state": "Maharashtra"
    },
    {
        "value": "651",
        "label": "Madhupur",
        "state": "Jharkhand"
    },
    {
        "value": "652",
        "label": "Vikramasingapuram",
        "state": "Tamil Nadu"
    },
    {
        "value": "653",
        "label": "Punalur",
        "state": "Kerala"
    },
    {
        "value": "654",
        "label": "Kendrapara",
        "state": "Odisha"
    },
    {
        "value": "655",
        "label": "Sihor",
        "state": "Gujarat"
    },
    {
        "value": "656",
        "label": "Nellikuppam",
        "state": "Tamil Nadu"
    },
    {
        "value": "657",
        "label": "Samana",
        "state": "Punjab"
    },
    {
        "value": "658",
        "label": "Warora",
        "state": "Maharashtra"
    },
    {
        "value": "659",
        "label": "Nilambur",
        "state": "Kerala"
    },
    {
        "value": "660",
        "label": "Rasipuram",
        "state": "Tamil Nadu"
    },
    {
        "value": "661",
        "label": "Ramnagar",
        "state": "Uttarakhand"
    },
    {
        "value": "662",
        "label": "Jammalamadugu",
        "state": "Andhra Pradesh"
    },
    {
        "value": "663",
        "label": "Nawanshahr",
        "state": "Punjab"
    },
    {
        "value": "664",
        "label": "Thoubal",
        "state": "Manipur"
    },
    {
        "value": "665",
        "label": "Athni",
        "state": "Karnataka"
    },
    {
        "value": "666",
        "label": "Cherthala",
        "state": "Kerala"
    },
    {
        "value": "667",
        "label": "Sidhi",
        "state": "Madhya Pradesh"
    },
    {
        "value": "668",
        "label": "Farooqnagar",
        "state": "Telangana"
    },
    {
        "value": "669",
        "label": "Peddapuram",
        "state": "Andhra Pradesh"
    },
    {
        "value": "670",
        "label": "Chirkunda",
        "state": "Jharkhand"
    },
    {
        "value": "671",
        "label": "Pachora",
        "state": "Maharashtra"
    },
    {
        "value": "672",
        "label": "Madhepura",
        "state": "Bihar"
    },
    {
        "value": "673",
        "label": "Pithoragarh",
        "state": "Uttarakhand"
    },
    {
        "value": "674",
        "label": "Tumsar",
        "state": "Maharashtra"
    },
    {
        "value": "675",
        "label": "Phalodi",
        "state": "Rajasthan"
    },
    {
        "value": "676",
        "label": "Tiruttani",
        "state": "Tamil Nadu"
    },
    {
        "value": "677",
        "label": "Rampura Phul",
        "state": "Punjab"
    },
    {
        "value": "678",
        "label": "Perinthalmanna",
        "state": "Kerala"
    },
    {
        "value": "679",
        "label": "Padrauna",
        "state": "Uttar Pradesh"
    },
    {
        "value": "680",
        "label": "Pipariya",
        "state": "Madhya Pradesh"
    },
    {
        "value": "681",
        "label": "Dalli-Rajhara",
        "state": "Chhattisgarh"
    },
    {
        "value": "682",
        "label": "Punganur",
        "state": "Andhra Pradesh"
    },
    {
        "value": "683",
        "label": "Mattannur",
        "state": "Kerala"
    },
    {
        "value": "684",
        "label": "Mathura",
        "state": "Uttar Pradesh"
    },
    {
        "value": "685",
        "label": "Thakurdwara",
        "state": "Uttar Pradesh"
    },
    {
        "value": "686",
        "label": "Nandivaram-Guduvancheri",
        "state": "Tamil Nadu"
    },
    {
        "value": "687",
        "label": "Mulbagal",
        "state": "Karnataka"
    },
    {
        "value": "688",
        "label": "Manjlegaon",
        "state": "Maharashtra"
    },
    {
        "value": "689",
        "label": "Wankaner",
        "state": "Gujarat"
    },
    {
        "value": "690",
        "label": "Sillod",
        "state": "Maharashtra"
    },
    {
        "value": "691",
        "label": "Nidadavole",
        "state": "Andhra Pradesh"
    },
    {
        "value": "692",
        "label": "Surapura",
        "state": "Karnataka"
    },
    {
        "value": "693",
        "label": "Rajagangapur",
        "state": "Odisha"
    },
    {
        "value": "694",
        "label": "Sheikhpura",
        "state": "Bihar"
    },
    {
        "value": "695",
        "label": "Parlakhemundi",
        "state": "Odisha"
    },
    {
        "value": "696",
        "label": "Kalimpong",
        "state": "West Bengal"
    },
    {
        "value": "697",
        "label": "Siruguppa",
        "state": "Karnataka"
    },
    {
        "value": "698",
        "label": "Arvi",
        "state": "Maharashtra"
    },
    {
        "value": "699",
        "label": "Limbdi",
        "state": "Gujarat"
    },
    {
        "value": "700",
        "label": "Barpeta",
        "state": "Assam"
    },
    {
        "value": "701",
        "label": "Manglaur",
        "state": "Uttarakhand"
    },
    {
        "value": "702",
        "label": "Repalle",
        "state": "Andhra Pradesh"
    },
    {
        "value": "703",
        "label": "Mudhol",
        "state": "Karnataka"
    },
    {
        "value": "704",
        "label": "Shujalpur",
        "state": "Madhya Pradesh"
    },
    {
        "value": "705",
        "label": "Mandvi",
        "state": "Gujarat"
    },
    {
        "value": "706",
        "label": "Thangadh",
        "state": "Gujarat"
    },
    {
        "value": "707",
        "label": "Sironj",
        "state": "Madhya Pradesh"
    },
    {
        "value": "708",
        "label": "Nandura",
        "state": "Maharashtra"
    },
    {
        "value": "709",
        "label": "Shoranur",
        "state": "Kerala"
    },
    {
        "value": "710",
        "label": "Nathdwara",
        "state": "Rajasthan"
    },
    {
        "value": "711",
        "label": "Periyakulam",
        "state": "Tamil Nadu"
    },
    {
        "value": "712",
        "label": "Sultanganj",
        "state": "Bihar"
    },
    {
        "value": "713",
        "label": "Medak",
        "state": "Telangana"
    },
    {
        "value": "714",
        "label": "Narayanpet",
        "state": "Telangana"
    },
    {
        "value": "715",
        "label": "Raxaul Bazar",
        "state": "Bihar"
    },
    {
        "value": "716",
        "label": "Rajauri",
        "state": "Jammu and Kashmir"
    },
    {
        "value": "717",
        "label": "Pernampattu",
        "state": "Tamil Nadu"
    },
    {
        "value": "718",
        "label": "Nainital",
        "state": "Uttarakhand"
    },
    {
        "value": "719",
        "label": "Ramachandrapuram",
        "state": "Andhra Pradesh"
    },
    {
        "value": "720",
        "label": "Vaijapur",
        "state": "Maharashtra"
    },
    {
        "value": "721",
        "label": "Nangal",
        "state": "Punjab"
    },
    {
        "value": "722",
        "label": "Sidlaghatta",
        "state": "Karnataka"
    },
    {
        "value": "723",
        "label": "Punch",
        "state": "Jammu and Kashmir"
    },
    {
        "value": "724",
        "label": "Pandhurna",
        "state": "Madhya Pradesh"
    },
    {
        "value": "725",
        "label": "Wadgaon Road",
        "state": "Maharashtra"
    },
    {
        "value": "726",
        "label": "Talcher",
        "state": "Odisha"
    },
    {
        "value": "727",
        "label": "Varkala",
        "state": "Kerala"
    },
    {
        "value": "728",
        "label": "Pilani",
        "state": "Rajasthan"
    },
    {
        "value": "729",
        "label": "Nowgong",
        "state": "Madhya Pradesh"
    },
    {
        "value": "730",
        "label": "Naila Janjgir",
        "state": "Chhattisgarh"
    },
    {
        "value": "731",
        "label": "Mapusa",
        "state": "Goa"
    },
    {
        "value": "732",
        "label": "Vellakoil",
        "state": "Tamil Nadu"
    },
    {
        "value": "733",
        "label": "Merta City",
        "state": "Rajasthan"
    },
    {
        "value": "734",
        "label": "Sivaganga",
        "state": "Tamil Nadu"
    },
    {
        "value": "735",
        "label": "Mandideep",
        "state": "Madhya Pradesh"
    },
    {
        "value": "736",
        "label": "Sailu",
        "state": "Maharashtra"
    },
    {
        "value": "737",
        "label": "Vyara",
        "state": "Gujarat"
    },
    {
        "value": "738",
        "label": "Kovvur",
        "state": "Andhra Pradesh"
    },
    {
        "value": "739",
        "label": "Vadalur",
        "state": "Tamil Nadu"
    },
    {
        "value": "740",
        "label": "Nawabganj",
        "state": "Uttar Pradesh"
    },
    {
        "value": "741",
        "label": "Padra",
        "state": "Gujarat"
    },
    {
        "value": "742",
        "label": "Sainthia",
        "state": "West Bengal"
    },
    {
        "value": "743",
        "label": "Siana",
        "state": "Uttar Pradesh"
    },
    {
        "value": "744",
        "label": "Shahpur",
        "state": "Karnataka"
    },
    {
        "value": "745",
        "label": "Sojat",
        "state": "Rajasthan"
    },
    {
        "value": "746",
        "label": "Noorpur",
        "state": "Uttar Pradesh"
    },
    {
        "value": "747",
        "label": "Paravoor",
        "state": "Kerala"
    },
    {
        "value": "748",
        "label": "Murtijapur",
        "state": "Maharashtra"
    },
    {
        "value": "749",
        "label": "Ramnagar",
        "state": "Bihar"
    },
    {
        "value": "750",
        "label": "Sundargarh",
        "state": "Odisha"
    },
    {
        "value": "751",
        "label": "Taki",
        "state": "West Bengal"
    },
    {
        "value": "752",
        "label": "Saundatti-Yellamma",
        "state": "Karnataka"
    },
    {
        "value": "753",
        "label": "Pathanamthitta",
        "state": "Kerala"
    },
    {
        "value": "754",
        "label": "Wadi",
        "state": "Karnataka"
    },
    {
        "value": "755",
        "label": "Rameshwaram",
        "state": "Tamil Nadu"
    },
    {
        "value": "756",
        "label": "Tasgaon",
        "state": "Maharashtra"
    },
    {
        "value": "757",
        "label": "Sikandra Rao",
        "state": "Uttar Pradesh"
    },
    {
        "value": "758",
        "label": "Sihora",
        "state": "Madhya Pradesh"
    },
    {
        "value": "759",
        "label": "Tiruvethipuram",
        "state": "Tamil Nadu"
    },
    {
        "value": "760",
        "label": "Tiruvuru",
        "state": "Andhra Pradesh"
    },
    {
        "value": "761",
        "label": "Mehkar",
        "state": "Maharashtra"
    },
    {
        "value": "762",
        "label": "Peringathur",
        "state": "Kerala"
    },
    {
        "value": "763",
        "label": "Perambalur",
        "state": "Tamil Nadu"
    },
    {
        "value": "764",
        "label": "Manvi",
        "state": "Karnataka"
    },
    {
        "value": "765",
        "label": "Zunheboto",
        "state": "Nagaland"
    },
    {
        "value": "766",
        "label": "Mahnar Bazar",
        "state": "Bihar"
    },
    {
        "value": "767",
        "label": "Attingal",
        "state": "Kerala"
    },
    {
        "value": "768",
        "label": "Shahbad",
        "state": "Haryana"
    },
    {
        "value": "769",
        "label": "Puranpur",
        "state": "Uttar Pradesh"
    },
    {
        "value": "770",
        "label": "Nelamangala",
        "state": "Karnataka"
    },
    {
        "value": "771",
        "label": "Nakodar",
        "state": "Punjab"
    },
    {
        "value": "772",
        "label": "Lunawada",
        "state": "Gujarat"
    },
    {
        "value": "773",
        "label": "Murshidabad",
        "state": "West Bengal"
    },
    {
        "value": "774",
        "label": "Mahe",
        "state": "Puducherry"
    },
    {
        "value": "775",
        "label": "Lanka",
        "state": "Assam"
    },
    {
        "value": "776",
        "label": "Rudauli",
        "state": "Uttar Pradesh"
    },
    {
        "value": "777",
        "label": "Tuensang",
        "state": "Nagaland"
    },
    {
        "value": "778",
        "label": "Lakshmeshwar",
        "state": "Karnataka"
    },
    {
        "value": "779",
        "label": "Zira",
        "state": "Punjab"
    },
    {
        "value": "780",
        "label": "Yawal",
        "state": "Maharashtra"
    },
    {
        "value": "781",
        "label": "Thana Bhawan",
        "state": "Uttar Pradesh"
    },
    {
        "value": "782",
        "label": "Ramdurg",
        "state": "Karnataka"
    },
    {
        "value": "783",
        "label": "Pulgaon",
        "state": "Maharashtra"
    },
    {
        "value": "784",
        "label": "Sadasivpet",
        "state": "Telangana"
    },
    {
        "value": "785",
        "label": "Nargund",
        "state": "Karnataka"
    },
    {
        "value": "786",
        "label": "Neem-Ka-Thana",
        "state": "Rajasthan"
    },
    {
        "value": "787",
        "label": "Memari",
        "state": "West Bengal"
    },
    {
        "value": "788",
        "label": "Nilanga",
        "state": "Maharashtra"
    },
    {
        "value": "789",
        "label": "Naharlagun",
        "state": "Arunachal Pradesh"
    },
    {
        "value": "790",
        "label": "Pakaur",
        "state": "Jharkhand"
    },
    {
        "value": "791",
        "label": "Wai",
        "state": "Maharashtra"
    },
    {
        "value": "792",
        "label": "Tarikere",
        "state": "Karnataka"
    },
    {
        "value": "793",
        "label": "Malavalli",
        "state": "Karnataka"
    },
    {
        "value": "794",
        "label": "Raisen",
        "state": "Madhya Pradesh"
    },
    {
        "value": "795",
        "label": "Lahar",
        "state": "Madhya Pradesh"
    },
    {
        "value": "796",
        "label": "Uravakonda",
        "state": "Andhra Pradesh"
    },
    {
        "value": "797",
        "label": "Savanur",
        "state": "Karnataka"
    },
    {
        "value": "798",
        "label": "Sirohi",
        "state": "Rajasthan"
    },
    {
        "value": "799",
        "label": "Udhampur",
        "state": "Jammu and Kashmir"
    },
    {
        "value": "800",
        "label": "Umarga",
        "state": "Maharashtra"
    },
    {
        "value": "801",
        "label": "Pratapgarh",
        "state": "Rajasthan"
    },
    {
        "value": "802",
        "label": "Lingsugur",
        "state": "Karnataka"
    },
    {
        "value": "803",
        "label": "Usilampatti",
        "state": "Tamil Nadu"
    },
    {
        "value": "804",
        "label": "Palia Kalan",
        "state": "Uttar Pradesh"
    },
    {
        "value": "805",
        "label": "Wokha",
        "state": "Nagaland"
    },
    {
        "value": "806",
        "label": "Rajpipla",
        "state": "Gujarat"
    },
    {
        "value": "807",
        "label": "Vijayapura",
        "state": "Karnataka"
    },
    {
        "value": "808",
        "label": "Rawatbhata",
        "state": "Rajasthan"
    },
    {
        "value": "809",
        "label": "Sangaria",
        "state": "Rajasthan"
    },
    {
        "value": "810",
        "label": "Paithan",
        "state": "Maharashtra"
    },
    {
        "value": "811",
        "label": "Rahuri",
        "state": "Maharashtra"
    },
    {
        "value": "812",
        "label": "Patti",
        "state": "Punjab"
    },
    {
        "value": "813",
        "label": "Zaidpur",
        "state": "Uttar Pradesh"
    },
    {
        "value": "814",
        "label": "Lalsot",
        "state": "Rajasthan"
    },
    {
        "value": "815",
        "label": "Maihar",
        "state": "Madhya Pradesh"
    },
    {
        "value": "816",
        "label": "Vedaranyam",
        "state": "Tamil Nadu"
    },
    {
        "value": "817",
        "label": "Nawapur",
        "state": "Maharashtra"
    },
    {
        "value": "818",
        "label": "Solan",
        "state": "Himachal Pradesh"
    },
    {
        "value": "819",
        "label": "Vapi",
        "state": "Gujarat"
    },
    {
        "value": "820",
        "label": "Sanawad",
        "state": "Madhya Pradesh"
    },
    {
        "value": "821",
        "label": "Warisaliganj",
        "state": "Bihar"
    },
    {
        "value": "822",
        "label": "Revelganj",
        "state": "Bihar"
    },
    {
        "value": "823",
        "label": "Sabalgarh",
        "state": "Madhya Pradesh"
    },
    {
        "value": "824",
        "label": "Tuljapur",
        "state": "Maharashtra"
    },
    {
        "value": "825",
        "label": "Simdega",
        "state": "Jharkhand"
    },
    {
        "value": "826",
        "label": "Musabani",
        "state": "Jharkhand"
    },
    {
        "value": "827",
        "label": "Kodungallur",
        "state": "Kerala"
    },
    {
        "value": "828",
        "label": "Phulabani",
        "state": "Odisha"
    },
    {
        "value": "829",
        "label": "Umreth",
        "state": "Gujarat"
    },
    {
        "value": "830",
        "label": "Narsipatnam",
        "state": "Andhra Pradesh"
    },
    {
        "value": "831",
        "label": "Nautanwa",
        "state": "Uttar Pradesh"
    },
    {
        "value": "832",
        "label": "Rajgir",
        "state": "Bihar"
    },
    {
        "value": "833",
        "label": "Yellandu",
        "state": "Telangana"
    },
    {
        "value": "834",
        "label": "Sathyamangalam",
        "state": "Tamil Nadu"
    },
    {
        "value": "835",
        "label": "Pilibanga",
        "state": "Rajasthan"
    },
    {
        "value": "836",
        "label": "Morshi",
        "state": "Maharashtra"
    },
    {
        "value": "837",
        "label": "Pehowa",
        "state": "Haryana"
    },
    {
        "value": "838",
        "label": "Sonepur",
        "state": "Bihar"
    },
    {
        "value": "839",
        "label": "Pappinisseri",
        "state": "Kerala"
    },
    {
        "value": "840",
        "label": "Zamania",
        "state": "Uttar Pradesh"
    },
    {
        "value": "841",
        "label": "Mihijam",
        "state": "Jharkhand"
    },
    {
        "value": "842",
        "label": "Purna",
        "state": "Maharashtra"
    },
    {
        "value": "843",
        "label": "Puliyankudi",
        "state": "Tamil Nadu"
    },
    {
        "value": "844",
        "label": "Shikarpur, Bulandshahr",
        "state": "Uttar Pradesh"
    },
    {
        "value": "845",
        "label": "Umaria",
        "state": "Madhya Pradesh"
    },
    {
        "value": "846",
        "label": "Porsa",
        "state": "Madhya Pradesh"
    },
    {
        "value": "847",
        "label": "Naugawan Sadat",
        "state": "Uttar Pradesh"
    },
    {
        "value": "848",
        "label": "Fatehpur Sikri",
        "state": "Uttar Pradesh"
    },
    {
        "value": "849",
        "label": "Manuguru",
        "state": "Telangana"
    },
    {
        "value": "850",
        "label": "Udaipur",
        "state": "Tripura"
    },
    {
        "value": "851",
        "label": "Pipar City",
        "state": "Rajasthan"
    },
    {
        "value": "852",
        "label": "Pattamundai",
        "state": "Odisha"
    },
    {
        "value": "853",
        "label": "Nanjikottai",
        "state": "Tamil Nadu"
    },
    {
        "value": "854",
        "label": "Taranagar",
        "state": "Rajasthan"
    },
    {
        "value": "855",
        "label": "Yerraguntla",
        "state": "Andhra Pradesh"
    },
    {
        "value": "856",
        "label": "Satana",
        "state": "Maharashtra"
    },
    {
        "value": "857",
        "label": "Sherghati",
        "state": "Bihar"
    },
    {
        "value": "858",
        "label": "Sankeshwara",
        "state": "Karnataka"
    },
    {
        "value": "859",
        "label": "Madikeri",
        "state": "Karnataka"
    },
    {
        "value": "860",
        "label": "Thuraiyur",
        "state": "Tamil Nadu"
    },
    {
        "value": "861",
        "label": "Sanand",
        "state": "Gujarat"
    },
    {
        "value": "862",
        "label": "Rajula",
        "state": "Gujarat"
    },
    {
        "value": "863",
        "label": "Kyathampalle",
        "state": "Telangana"
    },
    {
        "value": "864",
        "label": "Shahabad, Rampur",
        "state": "Uttar Pradesh"
    },
    {
        "value": "865",
        "label": "Tilda Newra",
        "state": "Chhattisgarh"
    },
    {
        "value": "866",
        "label": "Narsinghgarh",
        "state": "Madhya Pradesh"
    },
    {
        "value": "867",
        "label": "Chittur-Thathamangalam",
        "state": "Kerala"
    },
    {
        "value": "868",
        "label": "Malaj Khand",
        "state": "Madhya Pradesh"
    },
    {
        "value": "869",
        "label": "Sarangpur",
        "state": "Madhya Pradesh"
    },
    {
        "value": "870",
        "label": "Robertsganj",
        "state": "Uttar Pradesh"
    },
    {
        "value": "871",
        "label": "Sirkali",
        "state": "Tamil Nadu"
    },
    {
        "value": "872",
        "label": "Radhanpur",
        "state": "Gujarat"
    },
    {
        "value": "873",
        "label": "Tiruchendur",
        "state": "Tamil Nadu"
    },
    {
        "value": "874",
        "label": "Utraula",
        "state": "Uttar Pradesh"
    },
    {
        "value": "875",
        "label": "Patratu",
        "state": "Jharkhand"
    },
    {
        "value": "876",
        "label": "Vijainagar, Ajmer",
        "state": "Rajasthan"
    },
    {
        "value": "877",
        "label": "Periyasemur",
        "state": "Tamil Nadu"
    },
    {
        "value": "878",
        "label": "Pathri",
        "state": "Maharashtra"
    },
    {
        "value": "879",
        "label": "Sadabad",
        "state": "Uttar Pradesh"
    },
    {
        "value": "880",
        "label": "Talikota",
        "state": "Karnataka"
    },
    {
        "value": "881",
        "label": "Sinnar",
        "state": "Maharashtra"
    },
    {
        "value": "882",
        "label": "Mungeli",
        "state": "Chhattisgarh"
    },
    {
        "value": "883",
        "label": "Sedam",
        "state": "Karnataka"
    },
    {
        "value": "884",
        "label": "Shikaripur",
        "state": "Karnataka"
    },
    {
        "value": "885",
        "label": "Sumerpur",
        "state": "Rajasthan"
    },
    {
        "value": "886",
        "label": "Sattur",
        "state": "Tamil Nadu"
    },
    {
        "value": "887",
        "label": "Sugauli",
        "state": "Bihar"
    },
    {
        "value": "888",
        "label": "Lumding",
        "state": "Assam"
    },
    {
        "value": "889",
        "label": "Vandavasi",
        "state": "Tamil Nadu"
    },
    {
        "value": "890",
        "label": "Titlagarh",
        "state": "Odisha"
    },
    {
        "value": "891",
        "label": "Uchgaon",
        "state": "Maharashtra"
    },
    {
        "value": "892",
        "label": "Mokokchung",
        "state": "Nagaland"
    },
    {
        "value": "893",
        "label": "Paschim Punropara",
        "state": "West Bengal"
    },
    {
        "value": "894",
        "label": "Sagwara",
        "state": "Rajasthan"
    },
    {
        "value": "895",
        "label": "Ramganj Mandi",
        "state": "Rajasthan"
    },
    {
        "value": "896",
        "label": "Tarakeswar",
        "state": "West Bengal"
    },
    {
        "value": "897",
        "label": "Mahalingapura",
        "state": "Karnataka"
    },
    {
        "value": "898",
        "label": "Dharmanagar",
        "state": "Tripura"
    },
    {
        "value": "899",
        "label": "Mahemdabad",
        "state": "Gujarat"
    },
    {
        "value": "900",
        "label": "Manendragarh",
        "state": "Chhattisgarh"
    },
    {
        "value": "901",
        "label": "Uran",
        "state": "Maharashtra"
    },
    {
        "value": "902",
        "label": "Tharamangalam",
        "state": "Tamil Nadu"
    },
    {
        "value": "903",
        "label": "Tirukkoyilur",
        "state": "Tamil Nadu"
    },
    {
        "value": "904",
        "label": "Pen",
        "state": "Maharashtra"
    },
    {
        "value": "905",
        "label": "Makhdumpur",
        "state": "Bihar"
    },
    {
        "value": "906",
        "label": "Maner",
        "state": "Bihar"
    },
    {
        "value": "907",
        "label": "Oddanchatram",
        "state": "Tamil Nadu"
    },
    {
        "value": "908",
        "label": "Palladam",
        "state": "Tamil Nadu"
    },
    {
        "value": "909",
        "label": "Mundi",
        "state": "Madhya Pradesh"
    },
    {
        "value": "910",
        "label": "Nabarangapur",
        "state": "Odisha"
    },
    {
        "value": "911",
        "label": "Mudalagi",
        "state": "Karnataka"
    },
    {
        "value": "912",
        "label": "Samalkha",
        "state": "Haryana"
    },
    {
        "value": "913",
        "label": "Nepanagar",
        "state": "Madhya Pradesh"
    },
    {
        "value": "914",
        "label": "Karjat",
        "state": "Maharashtra"
    },
    {
        "value": "915",
        "label": "Ranavav",
        "state": "Gujarat"
    },
    {
        "value": "916",
        "label": "Pedana",
        "state": "Andhra Pradesh"
    },
    {
        "value": "917",
        "label": "Pinjore",
        "state": "Haryana"
    },
    {
        "value": "918",
        "label": "Lakheri",
        "state": "Rajasthan"
    },
    {
        "value": "919",
        "label": "Pasan",
        "state": "Madhya Pradesh"
    },
    {
        "value": "920",
        "label": "Puttur",
        "state": "Andhra Pradesh"
    },
    {
        "value": "921",
        "label": "Vadakkuvalliyur",
        "state": "Tamil Nadu"
    },
    {
        "value": "922",
        "label": "Tirukalukundram",
        "state": "Tamil Nadu"
    },
    {
        "value": "923",
        "label": "Mahidpur",
        "state": "Madhya Pradesh"
    },
    {
        "value": "924",
        "label": "Mussoorie",
        "state": "Uttarakhand"
    },
    {
        "value": "925",
        "label": "Muvattupuzha",
        "state": "Kerala"
    },
    {
        "value": "926",
        "label": "Rasra",
        "state": "Uttar Pradesh"
    },
    {
        "value": "927",
        "label": "Udaipurwati",
        "state": "Rajasthan"
    },
    {
        "value": "928",
        "label": "Manwath",
        "state": "Maharashtra"
    },
    {
        "value": "929",
        "label": "Adoor",
        "state": "Kerala"
    },
    {
        "value": "930",
        "label": "Uthamapalayam",
        "state": "Tamil Nadu"
    },
    {
        "value": "931",
        "label": "Partur",
        "state": "Maharashtra"
    },
    {
        "value": "932",
        "label": "Nahan",
        "state": "Himachal Pradesh"
    },
    {
        "value": "933",
        "label": "Ladwa",
        "state": "Haryana"
    },
    {
        "value": "934",
        "label": "Mankachar",
        "state": "Assam"
    },
    {
        "value": "935",
        "label": "Nongstoin",
        "state": "Meghalaya"
    },
    {
        "value": "936",
        "label": "Losal",
        "state": "Rajasthan"
    },
    {
        "value": "937",
        "label": "Sri Madhopur",
        "state": "Rajasthan"
    },
    {
        "value": "938",
        "label": "Ramngarh",
        "state": "Rajasthan"
    },
    {
        "value": "939",
        "label": "Mavelikkara",
        "state": "Kerala"
    },
    {
        "value": "940",
        "label": "Rawatsar",
        "state": "Rajasthan"
    },
    {
        "value": "941",
        "label": "Rajakhera",
        "state": "Rajasthan"
    },
    {
        "value": "942",
        "label": "Lar",
        "state": "Uttar Pradesh"
    },
    {
        "value": "943",
        "label": "Lal Gopalganj Nindaura",
        "state": "Uttar Pradesh"
    },
    {
        "value": "944",
        "label": "Muddebihal",
        "state": "Karnataka"
    },
    {
        "value": "945",
        "label": "Sirsaganj",
        "state": "Uttar Pradesh"
    },
    {
        "value": "946",
        "label": "Shahpura",
        "state": "Rajasthan"
    },
    {
        "value": "947",
        "label": "Surandai",
        "state": "Tamil Nadu"
    },
    {
        "value": "948",
        "label": "Sangole",
        "state": "Maharashtra"
    },
    {
        "value": "949",
        "label": "Pavagada",
        "state": "Karnataka"
    },
    {
        "value": "950",
        "label": "Tharad",
        "state": "Gujarat"
    },
    {
        "value": "951",
        "label": "Mansa",
        "state": "Gujarat"
    },
    {
        "value": "952",
        "label": "Umbergaon",
        "state": "Gujarat"
    },
    {
        "value": "953",
        "label": "Mavoor",
        "state": "Kerala"
    },
    {
        "value": "954",
        "label": "Nalbari",
        "state": "Assam"
    },
    {
        "value": "955",
        "label": "Talaja",
        "state": "Gujarat"
    },
    {
        "value": "956",
        "label": "Malur",
        "state": "Karnataka"
    },
    {
        "value": "957",
        "label": "Mangrulpir",
        "state": "Maharashtra"
    },
    {
        "value": "958",
        "label": "Soro",
        "state": "Odisha"
    },
    {
        "value": "959",
        "label": "Shahpura",
        "state": "Rajasthan"
    },
    {
        "value": "960",
        "label": "Vadnagar",
        "state": "Gujarat"
    },
    {
        "value": "961",
        "label": "Raisinghnagar",
        "state": "Rajasthan"
    },
    {
        "value": "962",
        "label": "Sindhagi",
        "state": "Karnataka"
    },
    {
        "value": "963",
        "label": "Sanduru",
        "state": "Karnataka"
    },
    {
        "value": "964",
        "label": "Sohna",
        "state": "Haryana"
    },
    {
        "value": "965",
        "label": "Manavadar",
        "state": "Gujarat"
    },
    {
        "value": "966",
        "label": "Pihani",
        "state": "Uttar Pradesh"
    },
    {
        "value": "967",
        "label": "Safidon",
        "state": "Haryana"
    },
    {
        "value": "968",
        "label": "Risod",
        "state": "Maharashtra"
    },
    {
        "value": "969",
        "label": "Rosera",
        "state": "Bihar"
    },
    {
        "value": "970",
        "label": "Sankari",
        "state": "Tamil Nadu"
    },
    {
        "value": "971",
        "label": "Malpura",
        "state": "Rajasthan"
    },
    {
        "value": "972",
        "label": "Sonamukhi",
        "state": "West Bengal"
    },
    {
        "value": "973",
        "label": "Shamsabad, Agra",
        "state": "Uttar Pradesh"
    },
    {
        "value": "974",
        "label": "Nokha",
        "state": "Bihar"
    },
    {
        "value": "975",
        "label": "PandUrban Agglomeration",
        "state": "West Bengal"
    },
    {
        "value": "976",
        "label": "Mainaguri",
        "state": "West Bengal"
    },
    {
        "value": "977",
        "label": "Afzalpur",
        "state": "Karnataka"
    },
    {
        "value": "978",
        "label": "Shirur",
        "state": "Maharashtra"
    },
    {
        "value": "979",
        "label": "Salaya",
        "state": "Gujarat"
    },
    {
        "value": "980",
        "label": "Shenkottai",
        "state": "Tamil Nadu"
    },
    {
        "value": "981",
        "label": "Pratapgarh",
        "state": "Tripura"
    },
    {
        "value": "982",
        "label": "Vadipatti",
        "state": "Tamil Nadu"
    },
    {
        "value": "983",
        "label": "Nagarkurnool",
        "state": "Telangana"
    },
    {
        "value": "984",
        "label": "Savner",
        "state": "Maharashtra"
    },
    {
        "value": "985",
        "label": "Sasvad",
        "state": "Maharashtra"
    },
    {
        "value": "986",
        "label": "Rudrapur",
        "state": "Uttar Pradesh"
    },
    {
        "value": "987",
        "label": "Soron",
        "state": "Uttar Pradesh"
    },
    {
        "value": "988",
        "label": "Sholingur",
        "state": "Tamil Nadu"
    },
    {
        "value": "989",
        "label": "Pandharkaoda",
        "state": "Maharashtra"
    },
    {
        "value": "990",
        "label": "Perumbavoor",
        "state": "Kerala"
    },
    {
        "value": "991",
        "label": "Maddur",
        "state": "Karnataka"
    },
    {
        "value": "992",
        "label": "Nadbai",
        "state": "Rajasthan"
    },
    {
        "value": "993",
        "label": "Talode",
        "state": "Maharashtra"
    },
    {
        "value": "994",
        "label": "Shrigonda",
        "state": "Maharashtra"
    },
    {
        "value": "995",
        "label": "Madhugiri",
        "state": "Karnataka"
    },
    {
        "value": "996",
        "label": "Tekkalakote",
        "state": "Karnataka"
    },
    {
        "value": "997",
        "label": "Seoni-Malwa",
        "state": "Madhya Pradesh"
    },
    {
        "value": "998",
        "label": "Shirdi",
        "state": "Maharashtra"
    },
    {
        "value": "999",
        "label": "SUrban Agglomerationr",
        "state": "Uttar Pradesh"
    },
    {
        "value": "1000",
        "label": "Terdal",
        "state": "Karnataka"
    },
    {
        "value": "1001",
        "label": "Raver",
        "state": "Maharashtra"
    },
    {
        "value": "1002",
        "label": "Tirupathur",
        "state": "Tamil Nadu"
    },
    {
        "value": "1003",
        "label": "Taraori",
        "state": "Haryana"
    },
    {
        "value": "1004",
        "label": "Mukhed",
        "state": "Maharashtra"
    },
    {
        "value": "1005",
        "label": "Manachanallur",
        "state": "Tamil Nadu"
    },
    {
        "value": "1006",
        "label": "Rehli",
        "state": "Madhya Pradesh"
    },
    {
        "value": "1007",
        "label": "Sanchore",
        "state": "Rajasthan"
    },
    {
        "value": "1008",
        "label": "Rajura",
        "state": "Maharashtra"
    },
    {
        "value": "1009",
        "label": "Piro",
        "state": "Bihar"
    },
    {
        "value": "1010",
        "label": "Mudabidri",
        "state": "Karnataka"
    },
    {
        "value": "1011",
        "label": "Vadgaon Kasba",
        "state": "Maharashtra"
    },
    {
        "value": "1012",
        "label": "Nagar",
        "state": "Rajasthan"
    },
    {
        "value": "1013",
        "label": "Vijapur",
        "state": "Gujarat"
    },
    {
        "value": "1014",
        "label": "Viswanatham",
        "state": "Tamil Nadu"
    },
    {
        "value": "1015",
        "label": "Polur",
        "state": "Tamil Nadu"
    },
    {
        "value": "1016",
        "label": "Panagudi",
        "state": "Tamil Nadu"
    },
    {
        "value": "1017",
        "label": "Manawar",
        "state": "Madhya Pradesh"
    },
    {
        "value": "1018",
        "label": "Tehri",
        "state": "Uttarakhand"
    },
    {
        "value": "1019",
        "label": "Samdhan",
        "state": "Uttar Pradesh"
    },
    {
        "value": "1020",
        "label": "Pardi",
        "state": "Gujarat"
    },
    {
        "value": "1021",
        "label": "Rahatgarh",
        "state": "Madhya Pradesh"
    },
    {
        "value": "1022",
        "label": "Panagar",
        "state": "Madhya Pradesh"
    },
    {
        "value": "1023",
        "label": "Uthiramerur",
        "state": "Tamil Nadu"
    },
    {
        "value": "1024",
        "label": "Tirora",
        "state": "Maharashtra"
    },
    {
        "value": "1025",
        "label": "Rangia",
        "state": "Assam"
    },
    {
        "value": "1026",
        "label": "Sahjanwa",
        "state": "Uttar Pradesh"
    },
    {
        "value": "1027",
        "label": "Wara Seoni",
        "state": "Madhya Pradesh"
    },
    {
        "value": "1028",
        "label": "Magadi",
        "state": "Karnataka"
    },
    {
        "value": "1029",
        "label": "Rajgarh (Alwar)",
        "state": "Rajasthan"
    },
    {
        "value": "1030",
        "label": "Rafiganj",
        "state": "Bihar"
    },
    {
        "value": "1031",
        "label": "Tarana",
        "state": "Madhya Pradesh"
    },
    {
        "value": "1032",
        "label": "Rampur Maniharan",
        "state": "Uttar Pradesh"
    },
    {
        "value": "1033",
        "label": "Sheoganj",
        "state": "Rajasthan"
    },
    {
        "value": "1034",
        "label": "Raikot",
        "state": "Punjab"
    },
    {
        "value": "1035",
        "label": "Pauri",
        "state": "Uttarakhand"
    },
    {
        "value": "1036",
        "label": "Sumerpur",
        "state": "Uttar Pradesh"
    },
    {
        "value": "1037",
        "label": "Navalgund",
        "state": "Karnataka"
    },
    {
        "value": "1038",
        "label": "Shahganj",
        "state": "Uttar Pradesh"
    },
    {
        "value": "1039",
        "label": "Marhaura",
        "state": "Bihar"
    },
    {
        "value": "1040",
        "label": "Tulsipur",
        "state": "Uttar Pradesh"
    },
    {
        "value": "1041",
        "label": "Sadri",
        "state": "Rajasthan"
    },
    {
        "value": "1042",
        "label": "Thiruthuraipoondi",
        "state": "Tamil Nadu"
    },
    {
        "value": "1043",
        "label": "Shiggaon",
        "state": "Karnataka"
    },
    {
        "value": "1044",
        "label": "Pallapatti",
        "state": "Tamil Nadu"
    },
    {
        "value": "1045",
        "label": "Mahendragarh",
        "state": "Haryana"
    },
    {
        "value": "1046",
        "label": "Sausar",
        "state": "Madhya Pradesh"
    },
    {
        "value": "1047",
        "label": "Ponneri",
        "state": "Tamil Nadu"
    },
    {
        "value": "1048",
        "label": "Mahad",
        "state": "Maharashtra"
    },
    {
        "value": "1049",
        "label": "Lohardaga",
        "state": "Jharkhand"
    },
    {
        "value": "1050",
        "label": "Tirwaganj",
        "state": "Uttar Pradesh"
    },
    {
        "value": "1051",
        "label": "Margherita",
        "state": "Assam"
    },
    {
        "value": "1052",
        "label": "Sundarnagar",
        "state": "Himachal Pradesh"
    },
    {
        "value": "1053",
        "label": "Rajgarh",
        "state": "Madhya Pradesh"
    },
    {
        "value": "1054",
        "label": "Mangaldoi",
        "state": "Assam"
    },
    {
        "value": "1055",
        "label": "Renigunta",
        "state": "Andhra Pradesh"
    },
    {
        "value": "1056",
        "label": "Longowal",
        "state": "Punjab"
    },
    {
        "value": "1057",
        "label": "Ratia",
        "state": "Haryana"
    },
    {
        "value": "1058",
        "label": "Lalgudi",
        "state": "Tamil Nadu"
    },
    {
        "value": "1059",
        "label": "Shrirangapattana",
        "state": "Karnataka"
    },
    {
        "value": "1060",
        "label": "Niwari",
        "state": "Madhya Pradesh"
    },
    {
        "value": "1061",
        "label": "Natham",
        "state": "Tamil Nadu"
    },
    {
        "value": "1062",
        "label": "Unnamalaikadai",
        "state": "Tamil Nadu"
    },
    {
        "value": "1063",
        "label": "PurqUrban Agglomerationzi",
        "state": "Uttar Pradesh"
    },
    {
        "value": "1064",
        "label": "Shamsabad, Farrukhabad",
        "state": "Uttar Pradesh"
    },
    {
        "value": "1065",
        "label": "Mirganj",
        "state": "Bihar"
    },
    {
        "value": "1066",
        "label": "Todaraisingh",
        "state": "Rajasthan"
    },
    {
        "value": "1067",
        "label": "Warhapur",
        "state": "Uttar Pradesh"
    },
    {
        "value": "1068",
        "label": "Rajam",
        "state": "Andhra Pradesh"
    },
    {
        "value": "1069",
        "label": "Urmar Tanda",
        "state": "Punjab"
    },
    {
        "value": "1070",
        "label": "Lonar",
        "state": "Maharashtra"
    },
    {
        "value": "1071",
        "label": "Powayan",
        "state": "Uttar Pradesh"
    },
    {
        "value": "1072",
        "label": "P.N.Patti",
        "state": "Tamil Nadu"
    },
    {
        "value": "1073",
        "label": "Palampur",
        "state": "Himachal Pradesh"
    },
    {
        "value": "1074",
        "label": "Srisailam Project (Right Flank Colony) Township",
        "state": "Andhra Pradesh"
    },
    {
        "value": "1075",
        "label": "Sindagi",
        "state": "Karnataka"
    },
    {
        "value": "1076",
        "label": "Sandi",
        "state": "Uttar Pradesh"
    },
    {
        "value": "1077",
        "label": "Vaikom",
        "state": "Kerala"
    },
    {
        "value": "1078",
        "label": "Malda",
        "state": "West Bengal"
    },
    {
        "value": "1079",
        "label": "Tharangambadi",
        "state": "Tamil Nadu"
    },
    {
        "value": "1080",
        "label": "Sakaleshapura",
        "state": "Karnataka"
    },
    {
        "value": "1081",
        "label": "Lalganj",
        "state": "Bihar"
    },
    {
        "value": "1082",
        "label": "Malkangiri",
        "state": "Odisha"
    },
    {
        "value": "1083",
        "label": "Rapar",
        "state": "Gujarat"
    },
    {
        "value": "1084",
        "label": "Mauganj",
        "state": "Madhya Pradesh"
    },
    {
        "value": "1085",
        "label": "Todabhim",
        "state": "Rajasthan"
    },
    {
        "value": "1086",
        "label": "Srinivaspur",
        "state": "Karnataka"
    },
    {
        "value": "1087",
        "label": "Murliganj",
        "state": "Bihar"
    },
    {
        "value": "1088",
        "label": "Reengus",
        "state": "Rajasthan"
    },
    {
        "value": "1089",
        "label": "Sawantwadi",
        "state": "Maharashtra"
    },
    {
        "value": "1090",
        "label": "Tittakudi",
        "state": "Tamil Nadu"
    },
    {
        "value": "1091",
        "label": "Lilong",
        "state": "Manipur"
    },
    {
        "value": "1092",
        "label": "Rajaldesar",
        "state": "Rajasthan"
    },
    {
        "value": "1093",
        "label": "Pathardi",
        "state": "Maharashtra"
    },
    {
        "value": "1094",
        "label": "Achhnera",
        "state": "Uttar Pradesh"
    },
    {
        "value": "1095",
        "label": "Pavalue",
        "state": "Tamil Nadu"
    },
    {
        "value": "1096",
        "label": "Naraura",
        "state": "Uttar Pradesh"
    },
    {
        "value": "1097",
        "label": "Nakur",
        "state": "Uttar Pradesh"
    },
    {
        "value": "1098",
        "label": "Palai",
        "state": "Kerala"
    },
    {
        "value": "1099",
        "label": "Morinda, India",
        "state": "Punjab"
    },
    {
        "value": "1100",
        "label": "Manasa",
        "state": "Madhya Pradesh"
    },
    {
        "value": "1101",
        "label": "Nainpur",
        "state": "Madhya Pradesh"
    },
    {
        "value": "1102",
        "label": "Sahaspur",
        "state": "Uttar Pradesh"
    },
    {
        "value": "1103",
        "label": "Pauni",
        "state": "Maharashtra"
    },
    {
        "value": "1104",
        "label": "Prithvipur",
        "state": "Madhya Pradesh"
    },
    {
        "value": "1105",
        "label": "Ramtek",
        "state": "Maharashtra"
    },
    {
        "value": "1106",
        "label": "Silapathar",
        "state": "Assam"
    },
    {
        "value": "1107",
        "label": "Songadh",
        "state": "Gujarat"
    },
    {
        "value": "1108",
        "label": "Safipur",
        "state": "Uttar Pradesh"
    },
    {
        "value": "1109",
        "label": "Sohagpur",
        "state": "Madhya Pradesh"
    },
    {
        "value": "1110",
        "label": "Mul",
        "state": "Maharashtra"
    },
    {
        "value": "1111",
        "label": "Sadulshahar",
        "state": "Rajasthan"
    },
    {
        "value": "1112",
        "label": "Phillaur",
        "state": "Punjab"
    },
    {
        "value": "1113",
        "label": "Sambhar",
        "state": "Rajasthan"
    },
    {
        "value": "1114",
        "label": "Prantij",
        "state": "Rajasthan"
    },
    {
        "value": "1115",
        "label": "Nagla",
        "state": "Uttarakhand"
    },
    {
        "value": "1116",
        "label": "Pattran",
        "state": "Punjab"
    },
    {
        "value": "1117",
        "label": "Mount Abu",
        "state": "Rajasthan"
    },
    {
        "value": "1118",
        "label": "Reoti",
        "state": "Uttar Pradesh"
    },
    {
        "value": "1119",
        "label": "Tenu dam-cum-Kathhara",
        "state": "Jharkhand"
    },
    {
        "value": "1120",
        "label": "Panchla",
        "state": "West Bengal"
    },
    {
        "value": "1121",
        "label": "Sitarganj",
        "state": "Uttarakhand"
    },
    {
        "value": "1122",
        "label": "Pasighat",
        "state": "Arunachal Pradesh"
    },
    {
        "value": "1123",
        "label": "Motipur",
        "state": "Bihar"
    },
    {
        "value": "1124",
        "label": "O' Valley",
        "state": "Tamil Nadu"
    },
    {
        "value": "1125",
        "label": "Raghunathpur",
        "state": "West Bengal"
    },
    {
        "value": "1126",
        "label": "Suriyampalayam",
        "state": "Tamil Nadu"
    },
    {
        "value": "1127",
        "label": "Qadian",
        "state": "Punjab"
    },
    {
        "value": "1128",
        "label": "Rairangpur",
        "state": "Odisha"
    },
    {
        "value": "1129",
        "label": "Silvassa",
        "state": "Dadra and Nagar Haveli"
    },
    {
        "value": "1130",
        "label": "Nowrozabad (Khodargama)",
        "state": "Madhya Pradesh"
    },
    {
        "value": "1131",
        "label": "Mangrol",
        "state": "Rajasthan"
    },
    {
        "value": "1132",
        "label": "Soyagaon",
        "state": "Maharashtra"
    },
    {
        "value": "1133",
        "label": "Sujanpur",
        "state": "Punjab"
    },
    {
        "value": "1134",
        "label": "Manihari",
        "state": "Bihar"
    },
    {
        "value": "1135",
        "label": "Sikanderpur",
        "state": "Uttar Pradesh"
    },
    {
        "value": "1136",
        "label": "Mangalvedhe",
        "state": "Maharashtra"
    },
    {
        "value": "1137",
        "label": "Phulera",
        "state": "Rajasthan"
    },
    {
        "value": "1138",
        "label": "Ron",
        "state": "Karnataka"
    },
    {
        "value": "1139",
        "label": "Sholavandan",
        "state": "Tamil Nadu"
    },
    {
        "value": "1140",
        "label": "Saidpur",
        "state": "Uttar Pradesh"
    },
    {
        "value": "1141",
        "label": "Shamgarh",
        "state": "Madhya Pradesh"
    },
    {
        "value": "1142",
        "label": "Thammampatti",
        "state": "Tamil Nadu"
    },
    {
        "value": "1143",
        "label": "Maharajpur",
        "state": "Madhya Pradesh"
    },
    {
        "value": "1144",
        "label": "Multai",
        "state": "Madhya Pradesh"
    },
    {
        "value": "1145",
        "label": "Mukerian",
        "state": "Punjab"
    },
    {
        "value": "1146",
        "label": "Sirsi",
        "state": "Uttar Pradesh"
    },
    {
        "value": "1147",
        "label": "Purwa",
        "state": "Uttar Pradesh"
    },
    {
        "value": "1148",
        "label": "Sheohar",
        "state": "Bihar"
    },
    {
        "value": "1149",
        "label": "Namagiripettai",
        "state": "Tamil Nadu"
    },
    {
        "value": "1150",
        "label": "Parasi",
        "state": "Uttar Pradesh"
    },
    {
        "value": "1151",
        "label": "Lathi",
        "state": "Gujarat"
    },
    {
        "value": "1152",
        "label": "Lalganj",
        "state": "Uttar Pradesh"
    },
    {
        "value": "1153",
        "label": "Narkhed",
        "state": "Maharashtra"
    },
    {
        "value": "1154",
        "label": "Mathabhanga",
        "state": "West Bengal"
    },
    {
        "value": "1155",
        "label": "Shendurjana",
        "state": "Maharashtra"
    },
    {
        "value": "1156",
        "label": "Peravurani",
        "state": "Tamil Nadu"
    },
    {
        "value": "1157",
        "label": "Mariani",
        "state": "Assam"
    },
    {
        "value": "1158",
        "label": "Phulpur",
        "state": "Uttar Pradesh"
    },
    {
        "value": "1159",
        "label": "Rania",
        "state": "Haryana"
    },
    {
        "value": "1160",
        "label": "Pali",
        "state": "Madhya Pradesh"
    },
    {
        "value": "1161",
        "label": "Pachore",
        "state": "Madhya Pradesh"
    },
    {
        "value": "1162",
        "label": "Parangipettai",
        "state": "Tamil Nadu"
    },
    {
        "value": "1163",
        "label": "Pudupattinam",
        "state": "Tamil Nadu"
    },
    {
        "value": "1164",
        "label": "Panniyannur",
        "state": "Kerala"
    },
    {
        "value": "1165",
        "label": "Maharajganj",
        "state": "Bihar"
    },
    {
        "value": "1166",
        "label": "Rau",
        "state": "Madhya Pradesh"
    },
    {
        "value": "1167",
        "label": "Monoharpur",
        "state": "West Bengal"
    },
    {
        "value": "1168",
        "label": "Mandawa",
        "state": "Rajasthan"
    },
    {
        "value": "1169",
        "label": "Marigaon",
        "state": "Assam"
    },
    {
        "value": "1170",
        "label": "Pallikonda",
        "state": "Tamil Nadu"
    },
    {
        "value": "1171",
        "label": "Pindwara",
        "state": "Rajasthan"
    },
    {
        "value": "1172",
        "label": "Shishgarh",
        "state": "Uttar Pradesh"
    },
    {
        "value": "1173",
        "label": "Patur",
        "state": "Maharashtra"
    },
    {
        "value": "1174",
        "label": "Mayang Imphal",
        "state": "Manipur"
    },
    {
        "value": "1175",
        "label": "Mhowgaon",
        "state": "Madhya Pradesh"
    },
    {
        "value": "1176",
        "label": "Guruvayoor",
        "state": "Kerala"
    },
    {
        "value": "1177",
        "label": "Mhaswad",
        "state": "Maharashtra"
    },
    {
        "value": "1178",
        "label": "Sahawar",
        "state": "Uttar Pradesh"
    },
    {
        "value": "1179",
        "label": "Sivagiri",
        "state": "Tamil Nadu"
    },
    {
        "value": "1180",
        "label": "Mundargi",
        "state": "Karnataka"
    },
    {
        "value": "1181",
        "label": "Punjaipugalur",
        "state": "Tamil Nadu"
    },
    {
        "value": "1182",
        "label": "Kailasahar",
        "state": "Tripura"
    },
    {
        "value": "1183",
        "label": "Samthar",
        "state": "Uttar Pradesh"
    },
    {
        "value": "1184",
        "label": "Sakti",
        "state": "Chhattisgarh"
    },
    {
        "value": "1185",
        "label": "Sadalagi",
        "state": "Karnataka"
    },
    {
        "value": "1186",
        "label": "Silao",
        "state": "Bihar"
    },
    {
        "value": "1187",
        "label": "Mandalgarh",
        "state": "Rajasthan"
    },
    {
        "value": "1188",
        "label": "Loha",
        "state": "Maharashtra"
    },
    {
        "value": "1189",
        "label": "Pukhrayan",
        "state": "Uttar Pradesh"
    },
    {
        "value": "1190",
        "label": "Padmanabhapuram",
        "state": "Tamil Nadu"
    },
    {
        "value": "1191",
        "label": "Belonia",
        "state": "Tripura"
    },
    {
        "value": "1192",
        "label": "Saiha",
        "state": "Mizoram"
    },
    {
        "value": "1193",
        "label": "Srirampore",
        "state": "West Bengal"
    },
    {
        "value": "1194",
        "label": "Talwara",
        "state": "Punjab"
    },
    {
        "value": "1195",
        "label": "Puthuppally",
        "state": "Kerala"
    },
    {
        "value": "1196",
        "label": "Khowai",
        "state": "Tripura"
    },
    {
        "value": "1197",
        "label": "Vijaypur",
        "state": "Madhya Pradesh"
    },
    {
        "value": "1198",
        "label": "Takhatgarh",
        "state": "Rajasthan"
    },
    {
        "value": "1199",
        "label": "Thirupuvanam",
        "state": "Tamil Nadu"
    },
    {
        "value": "1200",
        "label": "Adra",
        "state": "West Bengal"
    },
    {
        "value": "1201",
        "label": "Piriyapatna",
        "state": "Karnataka"
    },
    {
        "value": "1202",
        "label": "Obra",
        "state": "Uttar Pradesh"
    },
    {
        "value": "1203",
        "label": "Adalaj",
        "state": "Gujarat"
    },
    {
        "value": "1204",
        "label": "Nandgaon",
        "state": "Maharashtra"
    },
    {
        "value": "1205",
        "label": "Barh",
        "state": "Bihar"
    },
    {
        "value": "1206",
        "label": "Chhapra",
        "state": "Gujarat"
    },
    {
        "value": "1207",
        "label": "Panamattom",
        "state": "Kerala"
    },
    {
        "value": "1208",
        "label": "Niwai",
        "state": "Uttar Pradesh"
    },
    {
        "value": "1209",
        "label": "Bageshwar",
        "state": "Uttarakhand"
    },
    {
        "value": "1210",
        "label": "Tarbha",
        "state": "Odisha"
    },
    {
        "value": "1211",
        "label": "Adyar",
        "state": "Karnataka"
    },
    {
        "value": "1212",
        "label": "Narsinghgarh",
        "state": "Madhya Pradesh"
    },
    {
        "value": "1213",
        "label": "Warud",
        "state": "Maharashtra"
    },
    {
        "value": "1214",
        "label": "Asarganj",
        "state": "Bihar"
    },
    {
        "value": "1215",
        "label": "Sarsod",
        "state": "Haryana"
    },
    {
        "value": "1216",
        "label": "Gandhinagar",
        "state": "Gujarat"
    },
    {
        "value":"1217",
        "label":"Kullu",
        "state":"Himachal Pradesh"
    },
    {
        "value":"1218",
        "label":"Manali",
        "state":"Himachal Praddesh"
    },
    {
        "value":"1219",
        "label":"Mirzapur",
        "state":"Uttar Pradesh"
    }
];


export default { states, cities };
