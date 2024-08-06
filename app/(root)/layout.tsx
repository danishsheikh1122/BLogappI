export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    return <div className="px-10 pt-2">
        {children}
    </div>
}
