const layout = ({children}: {children: React.ReactNode}) => {
    return (
        <div>
            <h1 className="text-3xl">navbar ROOT</h1>
            {children}
        </div>
    )
}

export default layout