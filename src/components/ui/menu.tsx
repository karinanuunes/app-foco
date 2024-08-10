import Link from "next/link";

const Menu = () => {
  return (
    <div className="w-64 flex flex-col gap-12 py-12 pl-10 bg-orange-800 h-lvh mt-2 ml-2 rounded-t-3xl">
      <h1 className="font-extrabold text-3xl text-white">FOCO.</h1>
      <div className="flex flex-col flex-1">
        <nav className="flex flex-col gap-6">
          <Link
            href={"/"}
            className="font-medium text-white flex items-center gap-2"
          >
            <img src="/dashboard.svg" alt="" />
            VISÃO GERAL
          </Link>
          <Link
            href={"/"}
            className="font-medium text-white flex items-center gap-2"
          >
            <img src="/stats.svg" alt="" />
            RELATÓRIOS
          </Link>
          <Link
            href={"/"}
            className="font-medium text-white flex items-center gap-2"
          >
            <img src="/config.svg" alt="" />
            CONFIGURAÇÃO
          </Link>
        </nav>
        <Link
          href={"/"}
          className="font-medium text-white flex items-center gap-2 mt-auto"
        >
          <img src="/logout.svg" alt="" />
          SAIR
        </Link>
      </div>
    </div>
  );
};

export default Menu;
