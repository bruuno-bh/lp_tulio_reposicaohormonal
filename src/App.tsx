import React, { useState, useEffect } from 'react';
import { Phone, CheckCircle, ArrowRight, X } from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [showPopup, setShowPopup] = useState(false); // Popup de agendamento no mobile
  const [showErrorPopup, setShowErrorPopup] = useState(false); // Popup de erro ao enviar o formulário

  // Exibe o popup de agendamento após 5 segundos no mobile
  useEffect(() => {
    const timer = setTimeout(() => {
      if (window.innerWidth < 768) {
        setShowPopup(true);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Atualiza os dados do formulário
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Envia os dados do formulário para o webhook
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        'https://hook.us2.make.com/wcamker88oac7htbehy9fcbo3pdafcqm',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setFormData({ name: '', email: '', phone: '' }); // Limpa os campos do formulário
        window.location.href = 'http://tuliosafar.com.br/obrigado'; // Redireciona após sucesso
      } else {
        setShowErrorPopup(true); // Exibe popup de erro se houver falha
      }
    } catch (error) {
      setShowErrorPopup(true); // Exibe popup de erro se houver falha na conexão
    }
  };
  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Top contact bar - fixed on mobile */}
      <div
        className="bg-[#8d8d6b] text-white py-2 px-4 text-center cursor-pointer md:relative fixed top-0 left-0 right-0 z-20"
        onClick={scrollToForm}
      >
        <div className="container mx-auto flex items-center justify-center gap-2">
          <Phone size={16} />
          <span className="text-sm font-medium" onClick={scrollToForm}>
            Agende agora: (17) 99792-0201
          </span>
        </div>
      </div>

      {/* Header - adjusted for fixed top bar on mobile */}
      <header className="bg-white py-4 shadow-md sticky md:top-0 top-9 z-10">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex-shrink-0">
            <img
              src="https://tuliosafar.com.br/wp-content/uploads/2023/12/logo-verde-site-_1.png"
              alt="Dr. Túlio Safar"
              className="h-16"
            />
          </div>
          <button
            onClick={scrollToForm}
            className="bg-[#8d8d6b] hover:bg-[#7a7a5d] text-white px-6 py-2 rounded-full font-medium transition-colors duration-300 block"
          >
            Agendar Consulta
          </button>
        </div>
      </header>

      <main className="flex-grow mt-9 md:mt-0">
        <div className="container mx-auto px-4 py-8 md:py-16 flex flex-col md:flex-row gap-8">
          {/* Main content */}
          <div className="md:w-2/3">
            {/* Hero section with image */}
            <section className="mb-16 flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <h1 className="text-3xl md:text-5xl font-bold text-[#8d8d6b] mb-4">
                  Recupere Sua Energia e Bem-Estar com Reposição Hormonal
                  Individualizada
                </h1>
                <p className="text-lg md:text-xl text-gray-700 mb-8">
                  Alívio para fadiga, baixa disposição, alterações de humor e
                  outros sintomas que comprometem sua qualidade de vida. Meu
                  tratamento é focado em te ajudar você a voltar a se sentir
                  bem.
                </p>
                <div className="block">
                  <button
                    onClick={scrollToForm}
                    className="bg-[#8d8d6b] hover:bg-[#7a7a5d] text-white px-8 py-3 rounded-full font-medium text-lg transition-colors duration-300 flex items-center gap-2"
                  >
                    Agendar Minha Avaliação <ArrowRight size={20} />
                  </button>
                </div>
              </div>
              <div className="md:w-1/2 mt-6 md:mt-0">
                <img
                  src="https://lp.tuliosafar.com.br/wp-content/uploads/2024/09/Especialista-em-Emagrecimento-Reposicoes-Hormonais-Lipedema-Performance-Esportiva-Tulio-Safar-3.webp"
                  alt="Médico especialista em reposição hormonal"
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
              </div>
            </section>

            {/* Symptoms section */}
            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#8d8d6b]">
                Você se identifica com algum destes sintomas?
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Fadiga constante e falta de energia que impedem você de aproveitar o dia.',
                  'Baixa libido e dificuldade de ter uma vida sexual satisfatória.',
                  'Oscilações de humor, ansiedade ou tristeza que afetam seus relacionamentos.',
                  'Ganho de peso sem explicação e dificuldade para emagrecer.',
                  'Perda de massa muscular e redução de força física.',
                  'Queda de cabelo e unhas fracas que abalam sua autoestima.',
                  'Dificuldade de concentração e "névoa mental".',
                  'Insônia ou sono interrompido que prejudica o descanso.',
                  'Dores articulares e musculares persistentes.',
                  'Ondas de calor e suor excessivo que causam desconforto.',
                ].map((symptom, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg"
                  >
                    <CheckCircle
                      className="text-[#8d8d6b] flex-shrink-0 mt-1"
                      size={20}
                    />
                    <p>{symptom}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 font-medium text-gray-800">
                Se você apresenta um ou mais desses sintomas, pode estar
                sofrendo de baixa hormonal.
              </p>
              <div className="mt-8">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                  alt="Pessoa com sintomas de desequilíbrio hormonal"
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                />
              </div>
            </section>

            {/* Why choose us section */}
            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#8d8d6b]">
                Por que escolher nosso serviço médico de reposição hormonal?
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: 'Equipe Médica Especializada',
                    description:
                      'Profissionais com experiência comprovada em terapias de reposição hormonal, prontos para avaliar e personalizar seu tratamento.',
                  },
                  {
                    title: 'Avaliação Individualizada',
                    description:
                      'Exames completos e acompanhamento contínuo para entender seu perfil hormonal e oferecer soluções específicas.',
                  },
                  {
                    title: 'Tratamentos Seguros e Eficazes',
                    description:
                      'Protocolos modernos e embasados em evidências científicas para garantir resultados satisfatórios.',
                  },
                  {
                    title: 'Acompanhamento Integral',
                    description:
                      'Suporte constante para ajuste de doses, orientações nutricionais e práticas de exercícios físicos, visando equilíbrio e bem-estar.',
                  },
                  {
                    title: 'Melhora da Qualidade de Vida',
                    description:
                      'Resgate da disposição, autoestima, saúde mental e vitalidade sexual.',
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="p-4 border-l-4 border-[#8d8d6b] bg-gray-50"
                  >
                    <h3 className="font-semibold text-lg text-[#8d8d6b]">
                      {item.title}
                    </h3>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                  alt="Médico especialista atendendo paciente"
                  className="rounded-lg shadow-md w-full h-48 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                  alt="Laboratório de análises clínicas"
                  className="rounded-lg shadow-md w-full h-48 object-cover"
                />
              </div>
            </section>

            {/* How it works section */}
            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#8d8d6b]">
                Como Funciona
              </h2>
              <div className="space-y-6">
                {[
                  {
                    step: 1,
                    title: 'Agendamento da Consulta',
                    description:
                      'Preencha o formulário ao lado e nossa equipe entrará em contato para marcar sua avaliação.',
                  },
                  {
                    step: 2,
                    title: 'Avaliação Personalizada',
                    description:
                      'Durante a consulta, investigamos seu histórico clínico, sintomas e realizamos exames para identificar as causas exatas do desequilíbrio hormonal.',
                  },
                  {
                    step: 3,
                    title: 'Definição do Tratamento',
                    description:
                      'Baseado nos resultados, indicamos a terapia adequada para restaurar seus níveis hormonais de forma segura.',
                  },
                  {
                    step: 4,
                    title: 'Acompanhamento Contínuo',
                    description:
                      'Monitoramos sua evolução e ajustamos o tratamento conforme necessário, garantindo resultados duradouros.',
                  },
                ].map((step) => (
                  <div key={step.step} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#8d8d6b] text-white flex items-center justify-center font-bold">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{step.title}</h3>
                      <p className="text-gray-700">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <img
                  src="https://lp.tuliosafar.com.br/wp-content/uploads/2024/09/Especialista-em-Emagrecimento-Reposicoes-Hormonais-Lipedema-Performance-Esportiva-Tulio-Safar-2.webp"
                  alt="Médico consultando paciente"
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                />
              </div>
            </section>

            {/* Call to action section */}
            <section className="mb-16 bg-[#f5f5f0] p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-[#8d8d6b]">
                Pare de conviver com os sintomas que limitam sua vida!
              </h2>
              <p className="mb-6">
                Faça agora mesmo sua avaliação e descubra como a reposição
                hormonal pode devolver sua vitalidade.
              </p>
              <div className="md:hidden mb-8">
                <button
                  onClick={scrollToForm}
                  className="w-full bg-[#8d8d6b] hover:bg-[#7a7a5d] text-white px-6 py-3 rounded-full font-medium transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  Agendar Minha Avaliação <ArrowRight size={20} />
                </button>
              </div>
            </section>

            {/* Guarantee section */}
            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#8d8d6b]">
                Garantia de Qualidade e Cuidado Médico
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle
                    className="text-[#8d8d6b] flex-shrink-0 mt-1"
                    size={20}
                  />
                  <p>
                    Equipe formada por médicos especialistas em endocrinologia e
                    metabologia.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle
                    className="text-[#8d8d6b] flex-shrink-0 mt-1"
                    size={20}
                  />
                  <p>
                    Uso de técnicas e medicamentos aprovados pelos principais
                    órgãos de saúde.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle
                    className="text-[#8d8d6b] flex-shrink-0 mt-1"
                    size={20}
                  />
                  <p>
                    Atendimento humanizado, pensado para oferecer conforto e
                    segurança do início ao fim do tratamento.
                  </p>
                </li>
              </ul>
              <p className="mt-6 font-medium text-xl text-center text-[#8d8d6b]">
                Recupere o controle da sua saúde e viva com mais disposição!
              </p>
              <div className="mt-8">
                <img
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                  alt="Paciente satisfeito após tratamento"
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                />
              </div>
            </section>

            {/* Video section */}
            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#8d8d6b]">
                Conheça mais sobre nosso tratamento
              </h2>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  className="w-full h-[400px]"
                  src="https://www.youtube.com/embed/T6KF-xeZsRY"
                  title="Informações sobre reposição hormonal"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </section>

            <p className="text-sm text-gray-500 italic text-center mb-8">
              *Resultados variam de pessoa para pessoa. Consulte sempre um
              profissional de saúde para avaliação individualizada.
            </p>
          </div>

          {/* Contact form - always visible */}
          <div className="md:w-1/3">
            <div
              className="bg-white rounded-lg shadow-lg p-6 sticky top-28"
              id="contact-form"
            >
              <h3 className="text-xl font-semibold mb-4 text-[#8d8d6b] text-center">
                Agende sua consulta agora!
              </h3>
              <p className="text-gray-600 mb-6 text-center">
                Preencha o formulário abaixo e nossa equipe entrará em contato
                para marcar sua avaliação.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Nome completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8d8d6b]"
                    placeholder="Digite seu nome"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8d8d6b]"
                    placeholder="Digite seu e-mail"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8d8d6b]"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#8d8d6b] hover:bg-[#7a7a5d] text-white py-3 rounded-md font-medium transition-colors duration-300"
                >
                  AGENDAR MINHA AVALIAÇÃO AGORA
                </button>
              </form>
              <p className="text-xs text-gray-500 mt-4 text-center">
                Seus dados estão seguros e não serão compartilhados com
                terceiros.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-[#8d8d6b] text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">
            © 2025 Clínica de Reposição Hormonal. Todos os direitos reservados.
          </p>
          <p className="text-sm">
            Este site não substitui uma consulta médica. Procure sempre um
            profissional de saúde qualificado.
          </p>
        </div>
      </footer>

      {/* Mobile floating CTA popup */}
      {showPopup && (
        <div className="fixed bottom-4 left-4 right-4 bg-white p-4 rounded-lg shadow-lg z-50 md:hidden">
          <div className="flex justify-between items-center mb-2">
            <h4 className="font-semibold text-[#8d8d6b]">
              Agende sua consulta!
            </h4>
            <button
              onClick={() => setShowPopup(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={20} />
            </button>
          </div>
          <p className="text-sm mb-3">
            Não perca mais tempo sofrendo com sintomas hormonais.
          </p>
          <button
            onClick={scrollToForm}
            className="w-full bg-[#8d8d6b] hover:bg-[#7a7a5d] text-white py-2 rounded-md font-medium transition-colors duration-300 text-sm"
          >
            AGENDAR MINHA AVALIAÇÃO
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
