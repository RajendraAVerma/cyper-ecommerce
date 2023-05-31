import MenuProvider from "./dashboard/menu";

export default function ContextProviders({ children }) {
    return <MenuProvider>
        {children}
    </MenuProvider>
}