import React, { useState } from 'react';
import { Users, BookOpen, Brain, LogIn, UserPlus } from 'lucide-react';
import AuthModal from '../Auth/AuthModal';
import UssLogo from '../../assets/Uss.svg';

const HomePage: React.FC = () => {
  const [showAuth, setShowAuth] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');

  const handleShowLogin = () => {
    setAuthMode('login');
    setShowAuth(true);
  };

  const handleShowRegister = () => {
    setAuthMode('register');
    setShowAuth(true);
  };

  return (
    <div className="min-h-screen bg-[#F7F7F7]">
      {/* Header */}
      <header className="relative z-10 bg-[#031E3D] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center h-24">
            <div className="flex items-center space-x-4">
              <img src={UssLogo} alt="USS Logo" className="h-16 w-auto" />
              <h1 className="text-xl font-bold text-white">Chat Educativo</h1>
            </div>
            
            <div className="flex items-center space-x-3">
              <button
                onClick={handleShowLogin}
                className="px-4 py-2 text-white hover:bg-white/10 rounded-lg font-medium transition-colors flex items-center space-x-2"
              >
                <LogIn className="w-4 h-4" />
                <span>Iniciar sesión</span>
              </button>
              <button
                onClick={handleShowRegister}
                className="px-4 py-2 bg-white/90 hover:bg-white text-[#031E3D] rounded-lg font-medium transition-colors flex items-center space-x-2"
              >
                <UserPlus className="w-4 h-4" />
                <span>Registrarse</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-[#EAEAEA] rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Brain className="w-10 h-10 text-gray-800" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-[#333333] mb-6 leading-tight">
              Bienvenido al
              <br />
              <span className="text-[#333333]">
                Chat Educativo
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-[#333333] mb-12 max-w-3xl mx-auto leading-relaxed">
              para conversar con <strong className="text-[#333333]">Teo</strong> y{' '}
              <strong className="text-[#333333]">Jojo</strong>
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button
                onClick={handleShowRegister}
                className="px-8 py-4 bg-[#EAEAEA] hover:bg-gray-300 text-gray-800 rounded-xl font-semibold text-lg transition-all hover:shadow-lg flex items-center space-x-3"
              >
                <UserPlus className="w-6 h-6" />
                <span>Comenzar Ahora</span>
              </button>
              <button
                onClick={handleShowLogin}
                className="px-8 py-4 bg-white/80 backdrop-blur-sm hover:bg-white text-[#333333] border-2 border-gray-400 rounded-xl font-semibold text-lg transition-all hover:shadow-lg flex items-center space-x-3"
              >
                <LogIn className="w-6 h-6" />
                <span>Ya tengo cuenta</span>
              </button>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-300 text-center hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-gray-200 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-gray-800" />
              </div>
              <h3 className="text-lg font-semibold text-[#333333] mb-2">
                Conversación Interactiva
              </h3>
              <p className="text-[#333333] text-sm">
                Chatea en tiempo real con personajes diseñados para diferentes niveles educativos
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-300 text-center hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-gray-200 rounded-xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-gray-800" />
              </div>
              <h3 className="text-lg font-semibold text-[#333333] mb-2">
                Aprendizaje Adaptativo
              </h3>
              <p className="text-[#333333] text-sm">
                Cada personaje se adapta a diferentes estilos y necesidades de aprendizaje
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-300 text-center hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-gray-200 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-gray-800" />
              </div>
              <h3 className="text-lg font-semibold text-[#333333] mb-2">
                Evaluación Inteligente
              </h3>
              <p className="text-[#333333] text-sm">
                Sistema de reportes que evalúa el progreso y comprensión del estudiante
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-300 text-center hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-[#EAEAEA] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-gray-800" />
              </div>
              <h3 className="text-lg font-semibold text-[#333333] mb-2">
                Gestión Educativa
              </h3>
              <p className="text-[#333333] text-sm">
                Los docentes pueden monitorear el progreso y descargar reportes detallados
              </p>
            </div>
          </div>

          {/* Characters Preview */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#333333] mb-8">
              Conoce a nuestros personajes
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-gray-300">
                <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🧒</span>
                </div>
                <h3 className="text-2xl font-bold text-[#333333] mb-2">Teo</h3>
                <p className="text-[#333333] mb-4">9 años • 4º Básico</p>
                <p className="text-[#333333] text-sm leading-relaxed">
                  Teo tiene dificultades en lectura y escritura. Le encantan los colores 
                  y aprende mejor con ejemplos visuales y mucha paciencia.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-gray-300">
                <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">👧</span>
                </div>
                <h3 className="text-2xl font-bold text-[#333333] mb-2">Jojo</h3>
                <p className="text-[#333333] mb-4">15 años • 1º Medio</p>
                <p className="text-[#333333] text-sm leading-relaxed">
                  Jojo es tímida y tiene dificultades intelectuales leves. 
                  Le gusta la música y el fútbol, y aprende mejor con ejemplos concretos.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-12 text-center border border-gray-300">
            <h2 className="text-3xl font-bold text-[#333333] mb-4">
              ¿Listo para comenzar?
            </h2>
            <p className="text-[#333333] text-lg mb-8 max-w-2xl mx-auto">
              Únete a nuestra plataforma educativa y descubre una nueva forma 
              de aprender y enseñar a través de la conversación.
            </p>
            <button
              onClick={handleShowRegister}
              className="px-10 py-4 bg-[#EAEAEA] hover:bg-gray-300 text-gray-800 rounded-xl font-semibold text-xl transition-all hover:shadow-lg"
            >
              Crear cuenta gratuita
            </button>
          </div>
        </div>
      </main>

      <AuthModal 
        isOpen={showAuth}
        onClose={() => setShowAuth(false)}
        initialMode={authMode}
      />
    </div>
  );
};

export default HomePage;
