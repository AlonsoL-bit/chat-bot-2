import React, { useState } from 'react';
import { BookOpen, Users } from 'lucide-react';
import CharacterCard from '../CharacterCard/CharacterCard';
import ChatInterface from '../Chat/ChatInterface';

const StudentDashboard: React.FC = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<'Teo' | 'Jojo' | null>(null);

  if (selectedCharacter) {
    return (
      <ChatInterface
        character={selectedCharacter}
        onBack={() => setSelectedCharacter(null)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#F7F7F7] pt-20 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-[#EAEAEA] rounded-full flex items-center justify-center mx-auto mb-6">
            <BookOpen className="w-8 h-8 text-gray-800" />
          </div>
          <h1 className="text-4xl font-bold text-[#333333] mb-4">
            Bienvenido al Chat Educativo
          </h1>
          <p className="text-lg text-[#333333] max-w-2xl mx-auto">
            Conversa con Teo y Jojo para practicar y mejorar tus habilidades de comunicación. 
            ¡Cada conversación es una oportunidad de aprender!
          </p>
        </div>

        {/* Character Selection */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-3 mb-8">
            <Users className="w-6 h-6 text-[#333333]" />
            <h2 className="text-2xl font-bold text-[#333333]">
              Elige con quién quieres conversar
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <CharacterCard
              name="Teo"
              age={9}
              grade="4º Básico"
              description="Teo tiene dificultades en lectura y escritura, y a veces evita las tareas de lenguaje. Responde mejor cuando recibe apoyo visual y ejemplos concretos."
              interests={['Dibujos', 'Colores', 'Juegos visuales']}
              onClick={() => setSelectedCharacter('Teo')}
            />

            <CharacterCard
              name="Jojo"
              age={15}
              grade="1º Medio"
              description="Jojo tiene dificultades intelectuales leves y es tímida. Aprende mejor con ejemplos concretos y disfruta de actividades relacionadas con sus intereses."
              interests={['Música', 'Fútbol', 'Ejemplos prácticos']}
              onClick={() => setSelectedCharacter('Jojo')}
            />
          </div>
        </div>

        {/* Tips Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 max-w-4xl mx-auto border border-gray-300">
          <h3 className="text-lg font-semibold text-[#333333] mb-4">
            💡 Consejos para una mejor conversación
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-[#333333]">
            <div className="space-y-2">
              <p><strong>Con Teo:</strong></p>
              <ul className="space-y-1 pl-4">
                <li>• Usa ejemplos visuales y concretos</li>
                <li>• Sé paciente con las respuestas</li>
                <li>• Menciona colores y formas</li>
              </ul>
            </div>
            <div className="space-y-2">
              <p><strong>Con Jojo:</strong></p>
              <ul className="space-y-1 pl-4">
                <li>• Conecta con música y deportes</li>
                <li>• Usa ejemplos de la vida real</li>
                <li>• Dale tiempo para procesar</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;