import MailOutlineIcon from '@mui/icons-material/MailOutline';
export default function NewCustomers() {
    const customers = [
        {
            uid: "#TB010331",
            displayName: "Tommy Carey",
            photoURL: "https://themesbrand.com/toner/html/assets/images/users/avatar-1.jpg",
            timestamp: "17 Dec, 2022",
        },
        {
            uid: "#TB010331",
            displayName: "Cassius Brock",
            photoURL: "https://themesbrand.com/toner/html/assets/images/users/avatar-2.jpg",
            timestamp: "17 Dec, 2022",
        },
        {
            uid: "#TB010331",
            displayName: "Gabrielle Holden",
            photoURL: "https://themesbrand.com/toner/html/assets/images/users/avatar-3.jpg",
            timestamp: "17 Dec, 2022",
        },
        {
            uid: "#TB010331",
            displayName: "Alfred Hurst",
            photoURL: "https://themesbrand.com/toner/html/assets/images/users/avatar-4.jpg",
            timestamp: "17 Dec, 2022",
        },
        {
            uid: "#TB010331",
            displayName: "Kristina Hooper",
            photoURL: "https://themesbrand.com/toner/html/assets/images/users/avatar-5.jpg",
            timestamp: "17 Dec, 2022",
        },

        {
            uid: "#TB010331",
            displayName: "Jacques Leon",
            photoURL: "https://themesbrand.com/toner/html/assets/images/users/avatar-6.jpg",
            timestamp: "17 Dec, 2022",
        },
        {
            uid: "#TB010331",
            displayName: "Edward Rogers",
            photoURL: "https://themesbrand.com/toner/html/assets/images/users/avatar-7.jpg",
            timestamp: "17 Dec, 2022",
        },
        {
            uid: "#TB010331",
            displayName: "Alina Holland",
            photoURL: "https://themesbrand.com/toner/html/assets/images/users/avatar-8.jpg",
            timestamp: "17 Dec, 2022",
        },

    ];

    return <>
        <div className='border rounded flex flex-col w-full'>
            <div className="flex justify-between py-5 px-5">
                <h1 className="font-bold">New Customers</h1>
                <div className="flex gap-2 items-center">
                    <span className="text-xs text-blue-500">View All {" >"}</span>
                </div>
            </div>
            <hr />
            <div className="space-y-3 p-2  overflow-y-scroll scrollbar scrollbar-w-1 scrollbar-thumb-[#b4b6b8] scrollbar-track-transparent scrollbar-thumb-rounded-full">
                {customers.map((customer) => (
                    <CustomCard customer={customer} />
                ))}
            </div>
        </div>
    </>
};

function CustomCard({ customer }) {
    return <>
        <div className="flex items-center justify-between gap-1 p-2">
            <div className='flex items-center gap-1'>
                <img src={customer.photoURL} alt={customer.displayName} className="w-10 h-10 rounded object-cover" />
                <div>
                    <h3 className="font-semibold">{customer.displayName}</h3>
                    <p className="text-gray-500 text-sm">{customer.timestamp}</p>
                </div>
            </div>
            <div className="rounded bg-[#d7406420] hover:bg-[#d74064] hover:text-white p-2 flex items-center justify-center text-[#d74064] ease-in-out duration-200">
                <MailOutlineIcon className='w-3 h-3 font-thin' />
            </div>
        </div>
    </>
}
