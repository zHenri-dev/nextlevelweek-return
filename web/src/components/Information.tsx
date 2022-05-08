import developerImageUrl from '../assets/developer.jpg'

export function Information() {
  return (
    <div className="w-full h-screen flex items-center justify-center flex-col text-2xl gap-3 text-blue-500 overflow-hidden">
      <span>Desenvolvido com <span className="text-red-600">♥</span> por <a href="https://github.com/zhenri-dev" className="underline underline-offset-2 hover:text-blue-400 transition-colors" target="_blank">zHenri</a></span>
      <img src={developerImageUrl} alt="Imagem do desenvolvedor" className="w-[calc(100vw-2rem)] sm:w-[31rem] rounded-lg" />
    </div>
  );
}