import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="border-b border-b-slate-200 py-3">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-xl font-bold tracking-tight text-slate-500">
                    Vendio
                </Link>
            </div>
        </div>
      )
}

export default Header;