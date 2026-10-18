
import "./App.css";
import"./index.css";
import Intro from "./components/introcard";
import Navbar from"./components/Navbar";
import SocialMedia from"./components/socialmedia";

function App() {
  return (
    <>
       <div className="  bg-[#449406] bg-gradient-to-r from-cyan-400 via-indigo-700 to-purple-500  min-h-screen relative overflow-x-hidden ">
      
        {/* navigation */}

        <Navbar />


        {/* Main Section */}
        <div id="Main" className="items-center flex-wrap max-w-full py-30">
          <div className="flex justify-center ">
            <h1 className="text-white text-7xl font-medium">Anand Agrahari</h1>
          </div>
          <div className="py-5 flex justify-center">
            <h5 className="text-white text-3xl font-medium">
              I'm a Software Engineer
            </h5>
          </div>
        </div>
        {/* Fixed Language Sidebar - Bottom Left */}
        <div className="fixed bottom-5 left-5 bg-black/60 text-white w-12 h-32 flex flex-col items-center justify-around rounded-md shadow-lg p-2 gap-4 cursor-pointer">
          <h3 className="transform rotate-90 text-sm font-bold tracking-widest">
            ENG
          </h3>
          <h3 className="transform rotate-90 text-sm font-bold tracking-widest">
            HINDI
          </h3>
        </div>
        {/* Fixed Social Sidebar - Bottom Right (Styled like Language Sidebar) */}
        <SocialMedia/>
        {/* Cards for the introduction About*/}



       <Intro />
       <Intro />
       <Intro />
       <Intro />
       <Intro />



              
 
              </div>
      
    </>
  );
}

export default App;
