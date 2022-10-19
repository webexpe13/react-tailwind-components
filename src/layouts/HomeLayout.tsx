const HomeLayout = ({ children }: { children: any }) => {
    return (
        <>
            <div className={"dark:bg-slate-900 dark:text-white bg-slate-100 text-black pb-[20px] font-regular text-base leading-relaxed"}>
                {children}
            </div>
        </>
    )
}

export default HomeLayout