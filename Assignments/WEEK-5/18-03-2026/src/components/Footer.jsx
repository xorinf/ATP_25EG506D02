import Address from "./Address";

function Footer() {
    return (
        <div className="flex justify-around p-4 border-t border-gray-400 mt-8 font-mono max-h-screen">
            <Address title="Headquarters" city="Hyderabad" postalCode="Telangana - 500039" />
            <Address title="Branch Office" city="Hyderabad" postalCode="Telangana - 500038" />
        </div>
    )
}   
export default Footer;
