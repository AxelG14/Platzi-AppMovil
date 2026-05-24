import { useState } from 'react';
import { 
  Bell, 
  ChevronLeft, 
  MoreHorizontal, 
  CheckCircle2, 
  PlayCircle, 
  Circle, 
  MessageCircle,
  Send,
  Home, 
  BookOpen, 
  Award, 
  User,
  Calendar,
  Star,
  Clock,
  Trophy,
  BarChart2,
  Target,
  AlertCircle,
  Check,
  LogOut
} from 'lucide-react';

type Course = {
  id: number;
  title: string;
  instructor: string;
  category: string;
  progress: number;
  lessonsCompleted: number;
  totalLessons: number;
  inactiveDays: number;
  topics?: string[];
};

type Lesson = {
  id: number;
  title: string;
  module: string;
  duration: string;
  status: 'completed' | 'progress' | 'pending';
};

type ViewName =
  | 'login'
  | 'register'
  | 'onboarding'
  | 'dashboard'
  | 'my-courses'
  | 'course-detail'
  | 'course-exam'
  | 'course-learn'
  | 'notifications'
  | 'set-goal'
  | 'study-habit'
  | 'my-level'
  | 'achievements'
  | 'challenges'
  | 'activity';

type Navigate = (view: ViewName, data?: Course | null) => void;

type ToggleProps = {
  isOn: boolean;
  onToggle: () => void;
};

type ViewProps = {
  navigate: Navigate;
};

type CourseViewProps = {
  navigate: Navigate;
  course?: Course | null;
};

type StudyHabitDay = 'L' | 'M' | 'X' | 'J' | 'V' | 'S' | 'D';
type StudyHabitMeridiem = 'AM' | 'PM';

// --- DATOS SIMULADOS ---
const mockCourses: Course[] = [
  {
    id: 1,
    title: 'Curso de JavaScript Moderno',
    instructor: 'Freddy Vega',
    category: 'JavaScript',
    progress: 50,
    lessonsCompleted: 24,
    totalLessons: 48,
    inactiveDays: 8,
    topics: ['Variables y tipos', 'Funciones y closures', 'Promesas y async/await', 'Fetch API', 'Manejo de errores'],
  },
  {
    id: 2,
    title: 'Python para Data Science',
    instructor: 'Carli Code',
    category: 'Python',
    progress: 78,
    lessonsCompleted: 31,
    totalLessons: 40,
    inactiveDays: 0,
    topics: ['Numpy y manejo de arrays', 'Pandas: DataFrames', 'Visualización', 'Modelos básicos', 'Limpieza de datos'],
  },
  {
    id: 3,
    title: 'Curso de Figma para Diseño UX',
    instructor: 'Mitzi Morales',
    category: 'Diseño UX',
    progress: 22,
    lessonsCompleted: 8,
    totalLessons: 36,
    inactiveDays: 0,
    topics: ['Principios de diseño', 'Wireframing', 'Prototipado', 'Componentes y sistemas de diseño'],
  }
];

const mockLessons: Lesson[] = [
  { id: 1, title: 'Variables y Tipos', module: 'Módulo 1 · Fundamentos', duration: '8 min', status: 'completed' },
  { id: 2, title: 'Funciones Arrow', module: 'Módulo 1 · Fundamentos', duration: '12 min', status: 'completed' },
  { id: 3, title: 'Promesas y Async/Await', module: 'Módulo 2 · Asincronía', duration: '15 min', status: 'progress' },
  { id: 4, title: 'Fetch API', module: 'Módulo 2 · Asincronía', duration: '11 min', status: 'pending' },
  { id: 5, title: 'Manejo de Errores', module: 'Módulo 2 · Asincronía', duration: '9 min', status: 'pending' },
];

// --- COMPONENTES UI REUTILIZABLES ---
const Toggle = ({ isOn, onToggle }: ToggleProps) => (
  <div onClick={onToggle} className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors ${isOn ? 'bg-[#98CA3F]' : 'bg-slate-600'}`}>
    <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${isOn ? 'translate-x-6' : ''}`} />
  </div>
);

// --- VISTAS ---

// VISTA 0: Login (HU-11)
const LoginView = ({ navigate }: ViewProps) => {
  const [rememberMe, setRememberMe] = useState(true);

  return (
    <div className="h-full bg-[#0B101E] text-white pb-10 overflow-y-auto px-6 flex flex-col">
      <div className="pt-16 pb-8 flex flex-col items-center">
        <div className="w-[84px] h-[84px] bg-[#98CA3F] rounded-3xl flex items-center justify-center text-[#0B101E] text-4xl font-medium mb-6">
          P
        </div>
        <h1 className="text-2xl font-semibold text-white mb-2">Bienvenido de nuevo</h1>
        <p className="text-sm text-slate-400">Inicia sesion con tu cuenta de Platzi</p>
      </div>

      <div className="bg-[#2D161A] border border-[#5A2027] rounded-xl p-4 flex items-start space-x-3 mb-6">
        <AlertCircle className="w-5 h-5 text-[#F87171] flex-shrink-0 mt-0.5" />
        <p className="text-sm text-[#F87171] leading-snug">Correo o contrasena incorrectos.<br/>Intenta de nuevo.</p>
      </div>

      <div className="space-y-5 mb-6">
        <div>
          <label className="text-[13px] text-slate-400 mb-2 block">Correo electronico</label>
          <input 
            type="email" 
            defaultValue="juan@example.com"
            className="w-full bg-[#20242D] border border-transparent rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-[#98CA3F] transition-colors"
          />
        </div>
        <div>
          <label className="text-[13px] text-slate-400 mb-2 block">Contrasena</label>
          <div className="relative">
            <input 
              type="password" 
              defaultValue="password123"
              className="w-full bg-[#20242D] border border-transparent rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-[#98CA3F] transition-colors"
            />
            <Circle className="w-5 h-5 text-slate-500 absolute right-4 top-3.5" />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mb-8">
        <label className="flex items-center space-x-2.5 cursor-pointer" onClick={() => setRememberMe(!rememberMe)}>
          <div className={`w-[22px] h-[22px] rounded-md flex items-center justify-center transition-colors ${rememberMe ? 'bg-[#98CA3F]' : 'bg-[#20242D]'}`}>
            {rememberMe && <Check className="w-4 h-4 text-[#0B101E] stroke-[3]" />}
          </div>
          <span className="text-sm text-slate-300">Recordar sesion</span>
        </label>
        <span className="text-sm text-[#98CA3F] cursor-pointer hover:underline">Olvide mi contrasena</span>
      </div>

      <button 
        onClick={() => navigate('onboarding')}
        className="w-full bg-transparent border border-slate-700 py-3.5 rounded-xl text-sm font-medium hover:bg-slate-800 transition mb-8"
      >
        Entrar a Platzi
      </button>

      <button
        onClick={() => navigate('register')}
        className="w-full bg-[#151B2B] border border-[#98CA3F]/40 text-[#98CA3F] py-3.5 rounded-xl text-sm font-medium hover:bg-[#1A261E] transition mb-8"
      >
        Registrarme
      </button>

      <div className="flex items-center space-x-4 mb-8">
        <div className="flex-1 h-px bg-slate-800"></div>
        <span className="text-xs text-slate-500">o continua con</span>
        <div className="flex-1 h-px bg-slate-800"></div>
      </div>

      <div className="flex space-x-4 mb-10">
        <button className="flex-1 bg-[#151B2B] border border-slate-800 py-3.5 rounded-2xl flex items-center justify-center space-x-2.5 hover:bg-slate-800 transition">
          <div className="w-5 h-5 bg-[#EA4335] rounded-md flex items-center justify-center text-white font-bold text-[11px]">G</div>
          <span className="text-sm font-medium">Google</span>
        </button>
        <button className="flex-1 bg-[#151B2B] border border-slate-800 py-3.5 rounded-2xl flex items-center justify-center space-x-2.5 hover:bg-slate-800 transition">
          <div className="w-5 h-5 bg-[#4B5563] rounded-md flex items-center justify-center text-white font-bold text-[11px]">G</div>
          <span className="text-sm font-medium">GitHub</span>
        </button>
      </div>

      <div className="mt-auto pb-2">
        <p className="text-center text-xs text-slate-600">Maximo 5 intentos · Tu sesion dura 30 dias</p>
      </div>
    </div>
  );
};

// VISTA 0.3: Registro
const RegisterView = ({ navigate }: ViewProps) => {
  return (
    <div className="h-full bg-[#0B101E] text-white pb-10 overflow-y-auto px-6 flex flex-col">
      <div className="pt-8 pb-8">
        <button
          onClick={() => navigate('login')}
          className="flex items-center space-x-2 text-[#98CA3F] text-sm font-medium hover:text-[#b7df6f] transition"
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Regresar</span>
        </button>
      </div>

      <div className="pb-8 flex flex-col items-center text-center">
        <div className="w-[84px] h-[84px] bg-[#98CA3F] rounded-3xl flex items-center justify-center text-[#0B101E] text-4xl font-medium mb-6">
          P
        </div>
        <h1 className="text-2xl font-semibold text-white mb-2">Crea tu cuenta</h1>
        <p className="text-sm text-slate-400">Empieza tu camino de aprendizaje en Platzi</p>
      </div>

      <div className="space-y-5 mb-8">
        <div>
          <label className="text-[13px] text-slate-400 mb-2 block">Nombre completo</label>
          <input
            type="text"
            placeholder="Juan Diego"
            className="w-full bg-[#20242D] border border-transparent rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-[#98CA3F] transition-colors"
          />
        </div>

        <div>
          <label className="text-[13px] text-slate-400 mb-2 block">Correo electronico</label>
          <input
            type="email"
            placeholder="juan@example.com"
            className="w-full bg-[#20242D] border border-transparent rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-[#98CA3F] transition-colors"
          />
        </div>

        <div>
          <label className="text-[13px] text-slate-400 mb-2 block">Contrasena</label>
          <input
            type="password"
            placeholder="Minimo 8 caracteres"
            className="w-full bg-[#20242D] border border-transparent rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-[#98CA3F] transition-colors"
          />
        </div>

        <div>
          <label className="text-[13px] text-slate-400 mb-2 block">Confirmar contrasena</label>
          <input
            type="password"
            placeholder="Repite tu contrasena"
            className="w-full bg-[#20242D] border border-transparent rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-[#98CA3F] transition-colors"
          />
        </div>
      </div>

      <button
        onClick={() => navigate('onboarding')}
        className="w-full bg-[#151B2B] text-white border border-slate-700 py-3.5 rounded-xl text-sm font-medium hover:bg-slate-800 transition mb-6"
      >
        Crear cuenta
      </button>

      <p className="text-center text-xs text-slate-500 mt-auto">
        Al registrarte aceptas los terminos y condiciones.
      </p>
    </div>
  );
};

// VISTA 0.5: Onboarding (HU-12)
const OnboardingView = ({ navigate }: ViewProps) => {
  const [step, setStep] = useState(0);

  const slides = [
    {
      title: "Sigue tu progreso",
      desc: "Mira tu avance en cada curso y retoma donde lo dejaste fácilmente en tu dashboard.",
      icon: <BarChart2 className="w-24 h-24 text-[#98CA3F]" />
    },
    {
      title: "Establece tus metas",
      desc: "Define tu fecha límite y crea un hábito de estudio semanal para mantener la constancia.",
      icon: <Target className="w-24 h-24 text-[#98CA3F]" />
    },
    {
      title: "Gana recompensas",
      desc: "Acumula puntos XP, sube de nivel y desbloquea insignias por cada logro que alcances.",
      icon: <Trophy className="w-24 h-24 text-[#E5A84B]" />
    }
  ];

  const nextStep = () => {
    if (step < 2) setStep(step + 1);
    else navigate('dashboard');
  };

  return (
    <div className="h-full bg-[#0B101E] text-white flex flex-col relative">
      <div className="flex justify-end p-6">
        <button onClick={() => navigate('dashboard')} className="text-slate-400 text-sm font-medium hover:text-white transition">
          Saltar
        </button>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center pb-20">
        <div className="mb-10 w-48 h-48 bg-[#151B2B] rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(152,202,63,0.1)] border border-slate-800">
          {slides[step].icon}
        </div>
        <h2 className="text-2xl font-bold mb-4">{slides[step].title}</h2>
        <p className="text-slate-400 leading-relaxed max-w-[280px]">
          {slides[step].desc}
        </p>
      </div>

      <div className="p-8 pb-12 flex flex-col items-center">
        <div className="flex space-x-2 mb-8">
          {[0, 1, 2].map((i) => (
            <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === step ? 'w-6 bg-[#98CA3F]' : 'w-1.5 bg-slate-700'}`} />
          ))}
        </div>

        <button
          onClick={nextStep}
          className="w-full bg-[#98CA3F] text-[#0B101E] py-4 rounded-xl font-bold text-base hover:bg-[#86b535] transition-colors"
        >
          {step === 2 ? 'Comenzar a aprender' : 'Siguiente'}
        </button>
      </div>
    </div>
  );
};

// VISTA 1: Dashboard (HU-02)
const DashboardView = ({ navigate }: ViewProps) => {
  return (
    <div className="h-full bg-[#0B101E] text-white pb-24 overflow-y-auto">
      {/* Header */}
      <div className="p-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Platzi</h1>
        <div className="flex items-center space-x-4">
          <button onClick={() => navigate('notifications')} className="relative">
            <Bell className="w-6 h-6 text-[#E5A84B]" fill="#E5A84B" />
            <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border border-[#0B101E]"></span>
          </button>
          <div onClick={() => navigate('my-level')} className="flex items-center space-x-2 cursor-pointer bg-[#151B2B] rounded-full pl-3 pr-1 py-1 border border-slate-800 hover:border-[#98CA3F]/50 transition">
            <span className="text-xs text-[#98CA3F] font-semibold">Nv.5</span>
            <div className="w-7 h-7 rounded-full bg-[#98CA3F] flex items-center justify-center text-[#0B101E] font-bold text-xs">
              JD
            </div>
          </div>
        </div>
      </div>

      {/* Greeting */}
      <div className="px-6 mb-6">
        <p className="text-slate-400 text-sm">Buenos días,</p>
        <h2 className="text-3xl font-semibold mb-1">Juan Diego</h2>
        <p className="text-[#98CA3F] text-sm">Continúa donde lo dejaste</p>
      </div>

      {/* Filters */}
      <div className="px-6 flex space-x-3 overflow-x-auto pb-4 no-scrollbar">
        <button className="px-4 py-2 border border-slate-600 rounded-lg text-sm whitespace-nowrap bg-[#151B2B]">Último acceso</button>
        <button className="px-4 py-2 border border-slate-600 rounded-lg text-sm whitespace-nowrap"> % Avance </button>
        <button className="px-4 py-2 border border-slate-600 rounded-lg text-sm whitespace-nowrap">Completados</button>
      </div>

      {/* Course List */}
      <div className="px-6 space-y-4">
        {mockCourses.map((course) => (
          <div 
            key={course.id} 
            onClick={() => navigate('course-detail', course)}
            className="bg-[#151B2B] rounded-2xl p-5 border border-slate-800 cursor-pointer hover:border-slate-600 transition"
          >
            <div className="flex justify-between items-start mb-10">
              <span className="bg-[#1E293B] text-[#98CA3F] px-3 py-1 rounded-full text-xs opacity-80 border border-slate-700/50">
                {course.category}
              </span>
              {course.inactiveDays > 7 && (
                <span className="bg-[#E5A84B] text-[#0B101E] px-2 py-1 rounded-md text-xs font-semibold">
                  +{course.inactiveDays} días inactivo
                </span>
              )}
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-1">{course.title}</h3>
              <p className="text-slate-400 text-sm mb-4">{course.instructor}</p>
              
              <div className="w-full bg-slate-800 rounded-full h-1.5 mb-2">
                <div 
                  className="bg-[#98CA3F] h-1.5 rounded-full" 
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
              
              <div className="flex justify-between text-xs">
                <span className="text-[#98CA3F]">{course.progress}%</span>
                <span className="text-slate-400">{course.lessonsCompleted}/{course.totalLessons} lecciones</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// VISTA 1.5: Mis cursos inscritos
const MyCoursesView = ({ navigate }: ViewProps) => {
  return (
    <div className="h-full bg-[#0B101E] text-white pb-24 overflow-y-auto">
      <div className="p-6 border-b border-slate-800 sticky top-0 bg-[#0B101E] z-10">
        <h1 className="text-2xl font-bold mb-1">Mis cursos</h1>
        <p className="text-slate-400 text-sm">Cursos en los que estás inscrito</p>
      </div>

      <div className="px-6 pt-6 space-y-4">
        {mockCourses.map((course) => (
          <div
            key={course.id}
            onClick={() => navigate('course-detail', course)}
            className="bg-[#151B2B] rounded-2xl p-5 border border-slate-800 cursor-pointer hover:border-slate-600 transition"
          >
            <div className="flex justify-between items-start mb-8">
              <span className="bg-[#1E293B] text-[#98CA3F] px-3 py-1 rounded-full text-xs opacity-80 border border-slate-700/50">
                {course.category}
              </span>
              <span className="text-xs text-slate-400">{course.lessonsCompleted}/{course.totalLessons} lecciones</span>
            </div>

            <h3 className="text-lg font-semibold mb-1">{course.title}</h3>
            <p className="text-slate-400 text-sm mb-4">{course.instructor}</p>

            <div className="w-full bg-slate-800 rounded-full h-1.5 mb-2">
              <div
                className="bg-[#98CA3F] h-1.5 rounded-full"
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>

            <div className="flex justify-between items-center text-xs">
              <span className="text-[#98CA3F] font-medium">{course.progress}% completado</span>
              <span className="text-slate-400">Toca para ver detalle</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// VISTA 2: Detalle del Curso (HU-01)
const CourseDetailView = ({ navigate, course }: CourseViewProps) => {
  const currentCourse = course || mockCourses[0];
  const radius = 35;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (currentCourse.progress / 100) * circumference;
  const courseActionLabel = currentCourse.progress > 0 ? 'Continuar curso' : 'Iniciar curso';

  return (
    <div className="h-full bg-[#0B101E] text-white pb-24 overflow-y-auto">
      {/* Header */}
      <div className="p-6 flex justify-between items-center sticky top-0 bg-[#0B101E] z-10 border-b border-slate-800">
        <div className="flex items-center space-x-4">
          <button onClick={() => navigate('dashboard')} className="text-[#98CA3F]">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h1 className="text-lg font-semibold">Detalle del curso</h1>
        </div>
        <MoreHorizontal className="w-6 h-6 text-slate-400" />
      </div>

      {/* Course Info */}
      <div className="p-6">
        <span className="text-[#98CA3F] text-xs mb-2 block">{currentCourse.category}</span>
        <h2 className="text-2xl font-bold mb-1 leading-tight">{currentCourse.title}</h2>
        <p className="text-slate-400 text-sm mb-8">Instructor: {currentCourse.instructor}</p>

        {/* Circular Progress Section */}
        <div className="flex items-center space-x-6 mb-8">
          <div className="relative w-24 h-24 flex-shrink-0">
            <svg className="w-full h-full transform -rotate-90">
              <circle cx="48" cy="48" r={radius} stroke="#1E293B" strokeWidth="8" fill="transparent" />
              <circle 
                cx="48" cy="48" r={radius} 
                stroke="#98CA3F" strokeWidth="8" fill="transparent" 
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                className="transition-all duration-1000 ease-out"
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[#98CA3F] text-xl font-bold">{currentCourse.progress}%</span>
            </div>
          </div>
          
          <div>
            <div className="text-3xl font-bold text-[#98CA3F] mb-1">{currentCourse.progress}%</div>
            <div className="text-slate-400 text-sm mb-3">{currentCourse.lessonsCompleted} de {currentCourse.totalLessons} lecciones</div>
            <div className="flex space-x-2">
              <span className="bg-[#1A261E] text-[#98CA3F] px-2 py-1 rounded text-xs border border-[#98CA3F]/20">24 vistas</span>
              <span className="bg-[#E5A84B]/10 text-[#E5A84B] px-2 py-1 rounded text-xs border border-[#E5A84B]/20">3 en progreso</span>
            </div>
          </div>
        </div>

        {/* Botón para HU-04 */}
        <button 
          onClick={() => navigate('set-goal', currentCourse)}
          className="w-full mb-8 flex items-center justify-center space-x-2 bg-[#151B2B] border border-slate-700 py-3 rounded-xl hover:border-[#98CA3F]/50 transition"
        >
          <Calendar className="w-4 h-4 text-[#98CA3F]" />
          <span className="text-sm font-medium">Establecer meta de finalización</span>
        </button>

        <button
          onClick={() => navigate('course-exam', currentCourse)}
          className="w-full mb-4 flex items-center justify-center space-x-2 bg-transparent border border-slate-700 py-3 rounded-xl hover:border-[#98CA3F]/40 transition"
        >
          <Target className="w-4 h-4 text-[#98CA3F]" />
          <span className="text-sm font-medium text-[#98CA3F]">Homologar</span>
        </button>

        <button
          onClick={() => navigate('course-learn', currentCourse)}
          className="w-full mb-8 bg-[#98CA3F] text-[#0B101E] py-3.5 rounded-xl font-bold text-sm hover:bg-[#86b535] transition-colors"
        >
          {courseActionLabel}
        </button>

        {/* Lessons List */}
        <div className="border-t border-slate-800 pt-6">
          <h3 className="text-slate-400 text-xs font-semibold mb-4 tracking-wider">LECCIONES DEL MÓDULO ACTUAL</h3>
          <div className="space-y-0">
            {mockLessons.map((lesson) => (
              <div key={lesson.id} className="flex items-center py-4 border-b border-slate-800/50">
                <div className="mr-4">
                  {lesson.status === 'completed' && <div className="w-8 h-8 rounded-full bg-[#1A261E] flex items-center justify-center"><CheckCircle2 className="w-5 h-5 text-[#98CA3F]" /></div>}
                  {lesson.status === 'progress' && <div className="w-8 h-8 rounded-full bg-[#E5A84B]/10 flex items-center justify-center"><PlayCircle className="w-5 h-5 text-[#E5A84B]" fill="#E5A84B" /></div>}
                  {lesson.status === 'pending' && <div className="w-8 h-8 rounded-full bg-slate-800/50 flex items-center justify-center"><Circle className="w-4 h-4 text-slate-500" /></div>}
                </div>
                <div className="flex-1">
                  <h4 className={`text-sm font-medium ${lesson.status === 'pending' ? 'text-slate-300' : 'text-white'}`}>{lesson.title}</h4>
                  <p className="text-slate-500 text-xs">{lesson.module}</p>
                </div>
                <div className="flex items-center space-x-2 text-slate-400 text-xs">
                  <span>{lesson.duration}</span>
                  {lesson.status === 'completed' && <CheckCircle2 className="w-4 h-4 text-[#98CA3F]" />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// VISTA 2.5: Vista de aprendizaje del curso
// VISTA 2.1: Examen de homologación (HU - Homologar)
const CourseExamView = ({ navigate, course }: CourseViewProps) => {
  const currentCourse = course || mockCourses[0];

  const topics = currentCourse.topics || [];

  return (
    <div className="h-full bg-[#0B101E] text-white pb-24 overflow-y-auto">
      <div className="p-6 flex items-center space-x-4 border-b border-slate-800 sticky top-0 bg-[#0B101E] z-10">
        <button onClick={() => navigate('course-detail', currentCourse)} className="text-[#98CA3F]">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-semibold">Examen de homologación</h1>
      </div>

      <div className="p-6">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-12 h-12 rounded-xl bg-[#1A261E] flex items-center justify-center text-[#98CA3F] font-bold border border-[#98CA3F]/20">{currentCourse.title.split(' ').slice(1,3).map(s=>s[0]).join('')}</div>
          <div>
            <h2 className="text-lg font-semibold text-white">{currentCourse.title}</h2>
            <p className="text-slate-400 text-sm">Instructor: {currentCourse.instructor}</p>
          </div>
        </div>

        <h3 className="text-slate-400 text-xs font-semibold tracking-wider mb-4">TEMAS DEL EXAMEN</h3>
        <div className="space-y-3 mb-8">
          {topics.length === 0 && <p className="text-slate-500">No hay temas registrados para este curso.</p>}
          {topics.map((t, idx) => (
            <div key={idx} className="bg-[#151B2B] border border-slate-800 rounded-xl p-4 flex items-start justify-between">
              <div>
                <h4 className="text-sm font-semibold text-white">{`Tema ${idx + 1}: ${t}`}</h4>
                <p className="text-slate-400 text-xs mt-1">Preguntas relacionadas con {t} para evaluar conocimientos.</p>
              </div>
              <div className="flex items-center space-x-2">
                <button className="text-sm bg-[#98CA3F] text-[#0B101E] px-3 py-1 rounded-lg font-medium">Ver</button>
              </div>
            </div>
          ))}
        </div>

        <button onClick={() => navigate('course-detail', currentCourse)} className="w-full bg-[#151B2B] text-white border border-slate-700 py-3 rounded-xl font-medium hover:bg-slate-800 transition">Cancelar</button>
      </div>
    </div>
  );
};

const CourseLearnView = ({ navigate, course }: CourseViewProps) => {
  const currentCourse = course || mockCourses[0];
  const [commentText, setCommentText] = useState('');

  const modules = [
    { id: 1, name: 'Módulo 1 · Fundamentos', status: 'Completado', lessons: 8 },
    { id: 2, name: 'Módulo 2 · Asincronía', status: 'En curso', lessons: 10 },
    { id: 3, name: 'Módulo 3 · APIs y práctica', status: 'Pendiente', lessons: 12 },
    { id: 4, name: 'Módulo 4 · Proyecto final', status: 'Pendiente', lessons: 18 },
  ];

  const sampleComments = [
    { id: 1, user: 'Laura', text: 'La clase de async/await está buenísima, me ayudó mucho.' },
    { id: 2, user: 'Andrés', text: 'Tip: practica los ejercicios del módulo 2 antes de seguir.' },
    { id: 3, user: 'Sofía', text: 'Ya casi termino el proyecto final, ¡vamos equipo!' },
  ];

  return (
    <div className="h-full bg-[#0B101E] text-white pb-32 overflow-y-auto">
      <div className="p-6 flex items-center space-x-4 border-b border-slate-800 sticky top-0 bg-[#0B101E] z-10">
        <button onClick={() => navigate('course-detail', currentCourse)} className="text-[#98CA3F]">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-semibold">Continuar curso</h1>
      </div>

      <div className="p-6">
        {/* Video Player */}
        <div className="bg-[#000000] rounded-2xl overflow-hidden mb-8 border border-slate-800 aspect-video flex items-center justify-center relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-[#98CA3F]/10 to-transparent"></div>
          <button className="relative z-10 w-16 h-16 rounded-full bg-[#98CA3F] hover:bg-[#86b535] transition-colors flex items-center justify-center shadow-lg group-hover:scale-110 transform duration-300">
            <PlayCircle className="w-8 h-8 text-[#0B101E]" fill="#0B101E" />
          </button>
          <div className="absolute top-3 right-3 bg-[#0B101E]/80 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-medium text-slate-300">
            12:45 min
          </div>
        </div>

        {/* Video Info */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-white mb-1">Lección 3: Promesas y Async/Await</h2>
          <p className="text-slate-400 text-sm">Módulo 2 · Asincronía</p>
        </div>

        <h3 className="text-slate-400 text-xs font-semibold tracking-wider mb-4 uppercase">Módulos del curso</h3>
        <div className="space-y-3 mb-8">
          {modules.map((module) => (
            <div key={module.id} className="bg-[#151B2B] border border-slate-800 rounded-xl p-4">
              <div className="flex items-center justify-between mb-1.5">
                <h4 className="text-sm font-semibold text-white">{module.name}</h4>
                <span
                  className={`text-[11px] px-2 py-1 rounded-full border ${
                    module.status === 'Completado'
                      ? 'bg-[#1A261E] text-[#98CA3F] border-[#98CA3F]/30'
                      : module.status === 'En curso'
                      ? 'bg-[#E5A84B]/10 text-[#E5A84B] border-[#E5A84B]/30'
                      : 'bg-slate-800/60 text-slate-400 border-slate-700'
                  }`}
                >
                  {module.status}
                </span>
              </div>
              <p className="text-xs text-slate-400">{module.lessons} lecciones</p>
            </div>
          ))}
        </div>

        <h3 className="text-slate-400 text-xs font-semibold tracking-wider mb-4 uppercase">Comentarios</h3>
        <div className="space-y-3">
          {sampleComments.map((comment) => (
            <div key={comment.id} className="bg-[#151B2B] border border-slate-800 rounded-xl p-4">
              <div className="flex items-center space-x-2 mb-1.5">
                <div className="w-6 h-6 rounded-full bg-[#98CA3F] text-[#0B101E] text-[10px] font-bold flex items-center justify-center">
                  {comment.user.slice(0, 2).toUpperCase()}
                </div>
                <span className="text-sm font-medium text-white">{comment.user}</span>
              </div>
              <p className="text-sm text-slate-300">{comment.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 w-full bg-[#0B101E]/95 backdrop-blur-md border-t border-slate-800 p-4">
        <div className="bg-[#151B2B] border border-slate-700 rounded-xl px-3 py-2 flex items-center space-x-3">
          <MessageCircle className="w-4 h-4 text-slate-400 flex-shrink-0" />
          <input
            type="text"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Escribe un comentario..."
            className="flex-1 bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none"
          />
          <button className="w-8 h-8 rounded-lg bg-[#98CA3F] text-[#0B101E] flex items-center justify-center hover:bg-[#86b535] transition-colors">
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

// VISTA 3: Notificaciones (HU-03)
const NotificationsView = ({ navigate }: ViewProps) => {
  const [settings, setSettings] = useState({
    inactive: true, habit: true, challenges: false, silent: true
  });

  return (
    <div className="h-full bg-[#0B101E] text-white pb-10 overflow-y-auto">
      <div className="p-6 flex justify-between items-center">
        <button onClick={() => navigate('dashboard')} className="text-slate-400">
           <ChevronLeft className="w-6 h-6" />
        </button>
      </div>

      <div className="text-center mt-4 mb-8">
        <h1 className="text-6xl font-light mb-2">9:41</h1>
        <p className="text-slate-400">Jueves, 9 de abril</p>
      </div>

      <div className="px-4 space-y-4">
        {/* Platzi Notification */}
        <div className="bg-[#151B2B] rounded-2xl p-4 border border-slate-700/50 shadow-lg">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded bg-[#98CA3F] flex items-center justify-center text-[#0B101E] text-xs font-bold">P</div>
              <span className="text-[#98CA3F] text-sm">Platzi</span>
            </div>
            <span className="text-slate-500 text-xs">ahora</span>
          </div>
          <h3 className="font-semibold text-lg mb-1">¡Oye, te echamos de menos!</h3>
          <p className="text-slate-300 text-sm leading-relaxed mb-4">
            Continúa <span className="font-semibold text-white">JavaScript Moderno</span> — llevas un 50% completado. ¡Estás a la mitad!
          </p>
          <div className="flex space-x-3">
            <button 
              onClick={() => navigate('course-detail', mockCourses[0])}
              className="flex-1 bg-[#1A261E] border border-[#98CA3F]/30 text-[#98CA3F] py-2 rounded-lg text-sm font-medium hover:bg-[#98CA3F]/20 transition"
            >
              Continuar ahora
            </button>
            <button className="flex-1 bg-[#1E293B] text-slate-300 py-2 rounded-lg text-sm font-medium hover:bg-slate-700 transition">
              Más tarde
            </button>
          </div>
        </div>
      </div>

      <div className="px-6 mt-10">
        <h3 className="text-slate-400 text-xs font-semibold tracking-wider mb-4">CONFIGURACIÓN DE NOTIFICACIONES</h3>
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <span className="text-slate-200">Notificaciones de inactividad</span>
            <Toggle isOn={settings.inactive} onToggle={() => setSettings({...settings, inactive: !settings.inactive})} />
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-200">Recordatorios de hábito</span>
            <Toggle isOn={settings.habit} onToggle={() => setSettings({...settings, habit: !settings.habit})} />
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-200">Alertas de retos semanales</span>
            <Toggle isOn={settings.challenges} onToggle={() => setSettings({...settings, challenges: !settings.challenges})} />
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-200">Modo silencioso (22:00-07:00)</span>
            <Toggle isOn={settings.silent} onToggle={() => setSettings({...settings, silent: !settings.silent})} />
          </div>
        </div>
      </div>
    </div>
  );
};

// VISTA 4: Establecer meta (HU-04)
const GoalSettingView = ({ navigate, course }: CourseViewProps) => {
  const currentCourse = course || mockCourses[0];
  const remainingLessons = currentCourse.totalLessons - currentCourse.lessonsCompleted;

  const renderCalendarDays = () => {
    const days = [];
    for (let i = 0; i < 4; i++) {
      days.push(<div key={`empty-${i}`} className="h-8"></div>);
    }
    for (let i = 1; i <= 31; i++) {
      let bgClass = "text-slate-300 hover:bg-slate-800 rounded-lg cursor-pointer flex items-center justify-center h-8";
      if (i === 1) bgClass = "bg-[#1A261E] text-[#98CA3F] rounded-lg flex items-center justify-center h-8"; 
      if (i === 25) bgClass = "bg-[#98CA3F] text-[#0B101E] font-bold rounded-lg flex items-center justify-center h-8"; 

      days.push(
        <div key={`day-${i}`} className={bgClass}>
          {i}
        </div>
      );
    }
    return days;
  };

  return (
    <div className="h-full bg-[#0B101E] text-white pb-10 overflow-y-auto">
      <div className="p-6 flex items-center space-x-4 border-b border-slate-800">
        <button onClick={() => navigate('course-detail', currentCourse)} className="text-[#98CA3F]">
           <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-semibold">Establecer meta</h1>
      </div>

      <div className="p-6">
        <div className="flex items-center space-x-4 mb-8">
          <div className="w-12 h-12 rounded-xl bg-[#1A261E] flex items-center justify-center text-[#98CA3F] font-bold border border-[#98CA3F]/20">
            JS
          </div>
          <div>
            <h2 className="font-semibold text-white">{currentCourse.title.replace('Curso de ', '')}</h2>
            <p className="text-slate-400 text-sm">{remainingLessons} lecciones restantes</p>
          </div>
        </div>

        <h3 className="text-slate-400 text-xs font-semibold tracking-wider mb-4">FECHA META DE FINALIZACIÓN</h3>
        
        <div className="bg-[#151B2B] rounded-2xl border border-slate-800 p-5 mb-6">
          <div className="flex justify-between items-center mb-6">
            <button className="text-[#98CA3F]"><ChevronLeft className="w-5 h-5" /></button>
            <span className="font-semibold">Mayo 2026</span>
            <button className="text-[#98CA3F] rotate-180"><ChevronLeft className="w-5 h-5" /></button>
          </div>
          
          <div className="grid grid-cols-7 gap-y-4 gap-x-2 text-center text-sm mb-2">
            {['L', 'M', 'X', 'J', 'V', 'S', 'D'].map(day => (
              <div key={day} className="text-slate-500 font-medium">{day}</div>
            ))}
            {renderCalendarDays()}
          </div>
        </div>

        <div className="bg-[#1A261E]/30 rounded-2xl border border-[#98CA3F]/20 p-5 mb-8 space-y-3">
          <div className="flex justify-between">
            <span className="text-slate-300">Fecha seleccionada</span>
            <span className="text-[#98CA3F]">25 de Mayo 2026</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-300">Días disponibles</span>
            <span className="text-[#98CA3F]">24 días</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-300">Lecciones por día</span>
            <span className="text-[#98CA3F]">1 leccion/día</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-300">Ritmo</span>
            <span className="text-[#98CA3F]">Alcanzable</span>
          </div>
        </div>

        <button 
          onClick={() => navigate('dashboard')}
          className="w-full bg-[#151B2B] text-white border border-slate-700 py-4 rounded-xl font-medium hover:bg-slate-800 transition"
        >
          Guardar meta
        </button>
      </div>
    </div>
  );
};

// VISTA 5: Mi hábito de estudio (HU-05)
const StudyHabitView = ({ navigate }: ViewProps) => {
  const [activeDays, setActiveDays] = useState<StudyHabitDay[]>(['L', 'X', 'V']);
  const [startHour, setStartHour] = useState(7);
  const [startMinute, setStartMinute] = useState(0);
  const [ampm, setAmpm] = useState<StudyHabitMeridiem>('PM');
  const [duration, setDuration] = useState(60);

  // Estado guardado que alimenta el resumen inferior
  const [savedState, setSavedState] = useState({
    days: ['L', 'X', 'V'] as StudyHabitDay[],
    startHour: 7,
    startMinute: 0,
    ampm: 'PM' as StudyHabitMeridiem,
    duration: 60
  });
  
  const [isSaved, setIsSaved] = useState(false);

  const daysOfWeek: { id: StudyHabitDay; label: string; name: string }[] = [
    { id: 'L', label: 'L', name: 'Lun' }, { id: 'M', label: 'M', name: 'Mar' }, { id: 'X', label: 'X', name: 'Mié' },
    { id: 'J', label: 'J', name: 'Jue' }, { id: 'V', label: 'V', name: 'Vie' }, { id: 'S', label: 'S', name: 'Sáb' }, { id: 'D', label: 'D', name: 'Dom' }
  ];

  const toggleDay = (day: StudyHabitDay) => {
    if (activeDays.includes(day)) {
      setActiveDays(activeDays.filter(d => d !== day));
    } else {
      setActiveDays([...activeDays, day]);
    }
  };

  const formatTime = (h: number, m: number, ap: StudyHabitMeridiem) => {
    const mm = m < 10 ? `0${m}` : m;
    return `${h}:${mm} ${ap}`;
  };

  const calculateEndTime = (h: number, m: number, ap: StudyHabitMeridiem, dur: number) => {
    let hour24 = h === 12 ? (ap === 'AM' ? 0 : 12) : (ap === 'PM' ? h + 12 : h);
    let totalMinutes = hour24 * 60 + m + dur;
    let endHour24 = Math.floor(totalMinutes / 60) % 24;
    let endMin = totalMinutes % 60;
    let endAp: StudyHabitMeridiem = endHour24 >= 12 ? 'PM' : 'AM';
    let endHour12 = endHour24 % 12 || 12;
    return formatTime(endHour12, endMin, endAp);
  };

  const handleSave = () => {
    setSavedState({
      days: activeDays,
      startHour,
      startMinute,
      ampm,
      duration
    });
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2500); // Vuelve a su estado original después de 2.5s
  };

  const getSavedDaysString = () => {
    if (savedState.days.length === 0) return 'Ninguno';
    if (savedState.days.length === 7) return 'Todos los días';
    return daysOfWeek.filter(d => savedState.days.includes(d.id)).map(d => d.name).join(' · ');
  };

  const currentEndTime = calculateEndTime(startHour, startMinute, ampm, duration);
  const savedEndTime = calculateEndTime(savedState.startHour, savedState.startMinute, savedState.ampm, savedState.duration);

  return (
    <div className="h-full bg-[#0B101E] text-white pb-10 overflow-y-auto">
      <div className="p-6 flex items-center space-x-4 border-b border-slate-800">
        <button onClick={() => navigate('activity')} className="text-[#98CA3F]">
           <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-semibold">Mi hábito de estudio</h1>
      </div>

      <div className="p-6">
        <h3 className="text-slate-400 text-xs font-semibold tracking-wider mb-4 uppercase">Días de estudio</h3>
        <div className="flex justify-between mb-8">
          {daysOfWeek.map(day => {
            const isActive = activeDays.includes(day.id);
            return (
              <button 
                key={day.id}
                onClick={() => toggleDay(day.id)}
                className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm transition ${
                  isActive 
                  ? 'bg-[#1A261E] text-[#98CA3F] border border-[#98CA3F]' 
                  : 'bg-[#151B2B] text-slate-400 border border-slate-800'
                }`}
              >
                {day.label}
              </button>
            )
          })}
        </div>

        <h3 className="text-slate-400 text-xs font-semibold tracking-wider mb-4 uppercase">Franja horaria preferida</h3>
        <div className="bg-[#151B2B] rounded-2xl border border-slate-800 p-6 mb-6">
          <div className="flex justify-center items-center text-5xl font-light text-white tracking-widest mb-6">
            <select 
              value={startHour} 
              onChange={e => setStartHour(Number(e.target.value))}
              className="appearance-none bg-transparent text-right focus:outline-none cursor-pointer hover:text-[#98CA3F] transition-colors"
            >
              {[...Array(12)].map((_, i) => <option key={i+1} value={i+1} className="bg-[#151B2B] text-base">{i+1}</option>)}
            </select>
            <span className="text-[#98CA3F] mx-1">:</span>
            <select 
              value={startMinute} 
              onChange={e => setStartMinute(Number(e.target.value))}
              className="appearance-none bg-transparent text-left focus:outline-none cursor-pointer hover:text-[#98CA3F] transition-colors"
            >
              {[0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55].map(m => <option key={m} value={m} className="bg-[#151B2B] text-base">{m < 10 ? `0${m}` : m}</option>)}
            </select>
            <select 
              value={ampm} 
              onChange={e => setAmpm(e.target.value as StudyHabitMeridiem)}
              className="appearance-none bg-transparent text-xl text-[#98CA3F] ml-2 focus:outline-none cursor-pointer"
            >
              <option value="AM" className="bg-[#151B2B] text-base">AM</option>
              <option value="PM" className="bg-[#151B2B] text-base">PM</option>
            </select>
          </div>
          
          <div className="flex justify-between items-center py-3 border-t border-slate-800/50">
            <span className="text-slate-400 text-sm">Duración</span>
            <select 
              value={duration} 
              onChange={e => setDuration(Number(e.target.value))}
              className="appearance-none bg-transparent font-medium focus:outline-none cursor-pointer text-right hover:text-[#98CA3F] transition-colors"
            >
              {[15, 30, 45, 60, 90, 120].map(d => (
                <option key={d} value={d} className="bg-[#151B2B]">{d} minutos</option>
              ))}
            </select>
          </div>
          <div className="flex justify-between items-center pt-3 border-t border-slate-800/50">
            <span className="text-slate-400 text-sm">Hasta</span>
            <span className="font-medium text-[#98CA3F]">{currentEndTime}</span>
          </div>
        </div>

        <div className="bg-[#1A261E] rounded-2xl border border-[#98CA3F]/30 p-5 mb-6">
          <h2 className="text-xl font-bold text-white mb-1">7 días de racha</h2>
          <p className="text-slate-300 text-sm mb-4">Tu mejor marca hasta ahora</p>
          <div className="flex space-x-2">
            {daysOfWeek.map((day, i) => {
              const isStreak = i === 0 || i === 2 || i === 4;
              return (
                <div 
                  key={`racha-${day.id}`} 
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs ${
                    isStreak ? 'bg-[#98CA3F] text-[#0B101E] font-bold' : 'bg-[#151B2B] text-slate-500 border border-[#98CA3F]/20'
                  }`}
                >
                  {day.label}
                </div>
              )
            })}
          </div>
        </div>

        <div className="bg-[#151B2B] rounded-2xl border border-slate-800 p-5 mb-8 space-y-3 transition-all duration-300">
          <div className="flex justify-between text-sm">
            <span className="text-slate-400">Días seleccionados</span>
            <span className="font-medium text-white text-right">{getSavedDaysString()}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-slate-400">Horario</span>
            <span className="font-medium text-white">{formatTime(savedState.startHour, savedState.startMinute, savedState.ampm)} – {savedEndTime}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-slate-400">Recordatorios</span>
            <span className="font-medium text-white">Activados</span>
          </div>
        </div>

        <button 
          onClick={handleSave}
          className={`w-full text-white border py-4 rounded-xl font-medium transition-colors ${
            isSaved ? 'bg-[#1A261E] border-[#98CA3F] text-[#98CA3F]' : 'bg-[#151B2B] border-slate-700 hover:bg-slate-800'
          }`}
        >
          {isSaved ? '¡Hábito actualizado!' : 'Guardar hábito'}
        </button>
      </div>
    </div>
  );
};

// VISTA 7: Mi nivel (HU-07)
const MyLevelView = ({ navigate }: ViewProps) => {
  const levels = [
    { n: 1, name: 'Explorador', xp: '0 XP', status: 'completed' },
    { n: 2, name: 'Aprendiz', xp: '1,000 XP', status: 'completed' },
    { n: 3, name: 'Practicante', xp: '2,500 XP', status: 'completed' },
    { n: 4, name: 'Desarrollador', xp: '4,000 XP', status: 'completed' },
    { n: 5, name: 'Arquitecto', xp: '6,000 XP', status: 'current' },
    { n: 6, name: 'Ingeniero Senior', xp: '9,000 XP', status: 'locked' },
    { n: 7, name: 'Tech Lead', xp: '13,000 XP', status: 'locked' },
  ];

  return (
    <div className="h-full bg-[#0B101E] text-white pb-10 overflow-y-auto">
      <div className="p-6 flex items-center space-x-4">
        <button onClick={() => navigate('dashboard')} className="text-[#98CA3F]">
           <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-semibold">Mi nivel</h1>
      </div>

      {/* Top Banner */}
      <div className="flex flex-col items-center pt-2 pb-8 border-b border-slate-800">
        <div className="flex space-x-2 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-[#E5A84B]" fill="#E5A84B" />
          ))}
        </div>
        
        <div className="w-24 h-24 rounded-full border-[6px] border-[#98CA3F] flex items-center justify-center bg-[#98CA3F]/20 mb-6 shadow-[0_0_30px_rgba(152,202,63,0.3)]">
          <span className="text-4xl text-[#0B101E] bg-[#98CA3F] w-20 h-20 rounded-full flex items-center justify-center font-bold">5</span>
        </div>

        <h2 className="text-2xl font-semibold mb-1 text-white">Nivel 5 desbloqueado</h2>
        <p className="text-[#98CA3F] text-sm mb-2">Arquitecto del conocimiento</p>
        <p className="text-slate-400 text-xs">Alcanzaste 6,000 XP — sigue adelante</p>
      </div>

      <div className="p-6">
        <h3 className="text-slate-400 text-xs font-semibold tracking-wider mb-4 uppercase">Progreso al nivel 6</h3>
        <div className="mb-8">
          <div className="w-full bg-slate-800 rounded-full h-3 mb-2">
            <div className="bg-[#98CA3F] h-3 rounded-full w-[20%]"></div>
          </div>
          <div className="flex justify-between text-xs font-medium">
            <span className="text-[#98CA3F]">6,000 XP (actual)</span>
            <span className="text-slate-500">Nivel 6: 9,000 XP</span>
          </div>
        </div>

        <h3 className="text-slate-400 text-xs font-semibold tracking-wider mb-4 uppercase">Todos los niveles</h3>
        <div className="space-y-3">
          {levels.map((lvl) => {
            const isCurrent = lvl.status === 'current';
            const isCompleted = lvl.status === 'completed';
            const isLocked = lvl.status === 'locked';

            return (
              <div 
                key={lvl.n} 
                className={`flex items-center justify-between p-4 rounded-xl border ${
                  isCurrent ? 'bg-[#1A261E] border-[#98CA3F]' : 
                  isLocked ? 'bg-transparent border-slate-800/50 opacity-60' : 'bg-[#151B2B] border-slate-800'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    isCurrent ? 'bg-[#98CA3F] text-[#0B101E]' : 
                    isLocked ? 'bg-slate-800 text-slate-500' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {lvl.n}
                  </div>
                  <div>
                    <h4 className={`font-medium text-sm ${isCurrent ? 'text-[#98CA3F]' : 'text-white'}`}>{lvl.name}</h4>
                    <p className="text-slate-500 text-xs">{lvl.xp}</p>
                  </div>
                </div>
                
                {isCompleted && <span className="text-xs bg-[#1A261E] text-[#98CA3F] px-3 py-1 rounded-full border border-[#98CA3F]/20">Completado</span>}
                {isCurrent && <span className="text-xs bg-[#98CA3F] text-[#0B101E] px-4 py-1 rounded-full font-bold">Actual</span>}
                {isLocked && <span className="text-xs bg-slate-800/50 text-slate-500 px-3 py-1 rounded-full">Bloqueado</span>}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// VISTA 8: Mis logros (HU-08)
const AchievementsView = ({ navigate }: ViewProps) => {
  return (
    <div className="h-full bg-[#0B101E] text-white pb-10 overflow-y-auto">
      <div className="p-6 flex items-center space-x-4 border-b border-slate-800">
        <button onClick={() => navigate('activity')} className="text-[#98CA3F]">
           <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-semibold">Mis logros</h1>
      </div>

      <div className="p-6">
        {/* Stats Row */}
        <div className="flex space-x-3 mb-8">
          <div className="flex-1 bg-[#151B2B] border border-slate-800 rounded-xl p-3 text-center">
            <div className="text-2xl text-[#98CA3F] font-light mb-1">3</div>
            <div className="text-xs text-slate-400">Obtenidas</div>
          </div>
          <div className="flex-1 bg-[#151B2B] border border-slate-800 rounded-xl p-3 text-center">
            <div className="text-2xl text-[#E5A84B] font-light mb-1">6</div>
            <div className="text-xs text-slate-400">Pendientes</div>
          </div>
          <div className="flex-1 bg-[#151B2B] border border-slate-800 rounded-xl p-3 text-center">
            <div className="text-2xl text-[#98CA3F] font-light mb-1">9</div>
            <div className="text-xs text-slate-400">Total</div>
          </div>
        </div>

        {/* Highlighted Badge */}
        <h3 className="text-slate-400 text-xs font-semibold tracking-wider mb-4 uppercase">Insignia Desbloqueada</h3>
        <div className="bg-gradient-to-b from-[#151B2B] to-[#0B101E] border border-slate-700/50 rounded-3xl p-1 mb-10 shadow-lg">
          <div className="bg-[#0B101E] border border-[#98CA3F]/30 rounded-[22px] p-6 text-center">
            <div className="w-16 h-16 bg-[#98CA3F] rounded-full mx-auto flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(152,202,63,0.4)]">
              <Star className="w-8 h-8 text-white" fill="white" />
            </div>
            <h2 className="text-xl font-semibold mb-1 text-white">Primer destino</h2>
            <p className="text-[#98CA3F] text-xs mb-4">Categoría: Inicio</p>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Completaste tu primer curso en Platzi. El comienzo de un gran viaje.
            </p>
            <div className="bg-[#1A261E]/50 border border-[#98CA3F]/20 rounded-xl p-3 mb-6">
              <p className="text-[#98CA3F] text-xs">Criterio: Finalizar 1 curso al 100%</p>
            </div>
            <button className="w-full bg-[#151B2B] border border-slate-700 py-3 rounded-xl flex justify-center items-center space-x-2 text-sm font-medium hover:bg-slate-800 transition">
              <span>Compartir logro</span>
            </button>
          </div>
        </div>

        {/* Collection Grid */}
        <h3 className="text-slate-400 text-xs font-semibold tracking-wider mb-4 uppercase">Colección Completa</h3>
        <div className="grid grid-cols-3 gap-3">
          <div className="rounded-xl overflow-hidden border border-slate-800 aspect-square">
            <img src="/achievements/image1.png" alt="Insignia 1" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-xl overflow-hidden border border-slate-800 aspect-square">
            <img src="/achievements/image2.png" alt="Insignia 2" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-xl overflow-hidden border border-slate-800 aspect-square">
            <img src="/achievements/image3.png" alt="Insignia 3" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-xl overflow-hidden border border-slate-800 aspect-square">
            <img src="/achievements/image4.png" alt="Insignia 4" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-xl overflow-hidden border border-slate-800 aspect-square">
            <img src="/achievements/image5.png" alt="Insignia 5" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-xl overflow-hidden border border-slate-800 aspect-square">
            <img src="/achievements/image6.png" alt="Insignia 6" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-xl overflow-hidden border border-slate-800 aspect-square">
            <img src="/achievements/image7.png" alt="Insignia 7" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-xl overflow-hidden border border-slate-800 aspect-square">
            <img src="/achievements/image8.png" alt="Insignia 8" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-xl overflow-hidden border border-slate-800 aspect-square">
            <img src="/achievements/image9.png" alt="Insignia 9" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

// VISTA 9: Retos semanales (HU-09)
const ChallengesView = ({ navigate: _navigate }: ViewProps) => {
  return (
    <div className="h-full bg-[#0B101E] text-white pb-24 overflow-y-auto">
      <div className="p-6 flex items-center justify-between sticky top-0 bg-[#0B101E] z-10 border-b border-slate-800">
        <div className="flex items-center space-x-4">
          <h1 className="text-lg font-semibold ml-2">Retos de la semana</h1>
        </div>
        <MoreHorizontal className="w-6 h-6 text-slate-400" />
      </div>

      <div className="p-6 border-b border-slate-800 flex justify-between items-center">
        <div>
          <p className="text-slate-400 text-sm mb-1">Semana del 7 al 13 de abril</p>
          <h2 className="text-xl font-semibold text-white">3 retos disponibles</h2>
        </div>
        <div className="bg-[#1A1810] border border-[#E5A84B]/40 rounded-lg py-2 px-4 text-center">
          <div className="text-[#E5A84B] font-bold text-xl leading-none">4</div>
          <div className="text-[#E5A84B] text-[10px]">dias restantes</div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-slate-400 text-xs font-semibold tracking-wider mb-4 uppercase">Retos Activos</h3>
        
        <div className="space-y-4">
          {/* Challenge 1 (Completed) */}
          <div className="bg-[#151B2B] rounded-2xl border border-[#98CA3F] p-5 relative overflow-hidden">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-[#1A261E] rounded-xl flex items-center justify-center text-white font-medium text-lg flex-shrink-0">
                V
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">Maraton de lecciones</h4>
                <p className="text-slate-400 text-sm leading-snug">Completa 5 lecciones esta semana en cualquier curso</p>
              </div>
            </div>
            
            <div className="w-full bg-slate-800 rounded-full h-2 mb-2">
              <div className="bg-[#98CA3F] h-2 rounded-full w-full"></div>
            </div>
            
            <div className="flex justify-between text-xs mb-4">
              <span className="text-[#98CA3F] font-medium">5/5 lecciones</span>
              <span className="text-slate-400">Completado</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-[#98CA3F] text-xs bg-[#1A261E] border border-[#98CA3F]/30 px-3 py-1.5 rounded-full">
                +100 XP ganados
              </span>
              <span className="text-[#0B101E] font-medium text-xs bg-[#98CA3F] px-4 py-1.5 rounded-full">
                Terminado
              </span>
            </div>
          </div>

          {/* Challenge 2 (In Progress) */}
          <div className="bg-[#151B2B] rounded-2xl border border-slate-700 p-5">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-white font-medium text-lg flex-shrink-0">
                D
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">Constancia de estudio</h4>
                <p className="text-slate-400 text-sm leading-snug">Estudia al menos 3 dias distintos esta semana</p>
              </div>
            </div>
            
            <div className="w-full bg-slate-800 rounded-full h-2 mb-2">
              <div className="bg-blue-500 h-2 rounded-full w-[66%]"></div>
            </div>
            
            <div className="flex justify-between text-xs mb-4">
              <span className="text-blue-400 font-medium">2/3 dias</span>
              <span className="text-slate-400">En progreso</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-blue-400 text-xs bg-blue-900/30 border border-blue-500/30 px-3 py-1.5 rounded-full">
                +75 XP al completar
              </span>
              <span className="text-slate-500 text-xs">
                Vence dom 23:59
              </span>
            </div>
          </div>

          {/* Challenge 3 (Not Started) */}
          <div className="bg-[#151B2B] rounded-2xl border border-slate-800 p-5">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-slate-800/50 rounded-xl flex items-center justify-center text-white font-medium text-lg flex-shrink-0">
                C
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">Completa un curso</h4>
                <p className="text-slate-500 text-sm leading-snug">Lleva cualquier curso al 100% esta semana</p>
              </div>
            </div>
            
            <div className="w-full bg-slate-800 rounded-full h-2 mb-2">
              <div className="bg-[#98CA3F] h-2 rounded-full w-[0%]"></div>
            </div>
            
            <div className="flex justify-between text-xs mb-4">
              <span className="text-slate-500 font-medium">0/1 cursos</span>
              <span className="text-slate-500">Sin iniciar</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-[#98CA3F] text-xs bg-[#1A261E] border border-[#98CA3F]/30 px-3 py-1.5 rounded-full">
                +200 XP + insignia
              </span>
              <span className="text-slate-500 text-xs">
                Vence dom 23:59
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

// VISTA 10: Mi actividad (HU-10)
const ActivityView = ({ navigate }: ViewProps) => {
  return (
    <div className="h-full bg-[#0B101E] text-white pb-24 overflow-y-auto">
      <div className="p-6 flex items-center space-x-4 border-b border-slate-800 sticky top-0 bg-[#0B101E] z-10">
        <h1 className="text-lg font-semibold ml-2">Mi actividad</h1>
      </div>

      <div className="p-6">
        {/* Profile Header */}
        <div className="flex items-center space-x-4 mb-8 bg-[#151B2B] border border-slate-800 p-4 rounded-2xl cursor-pointer hover:border-[#98CA3F]/50 transition" onClick={() => navigate('my-level')}>
          <div className="w-14 h-14 rounded-full bg-[#98CA3F] flex items-center justify-center text-[#0B101E] font-bold text-xl flex-shrink-0">
            JD
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white leading-tight">Juan Diego</h2>
            <p className="text-[#98CA3F] text-sm mt-1">Nivel 5 · Arquitecto · 6,000 XP</p>
          </div>
        </div>

        {/* Action Buttons for Profile Hub */}
        <div className="flex space-x-3 mb-8">
          <button onClick={() => navigate('achievements')} className="flex-1 bg-[#151B2B] border border-slate-700 py-3 rounded-xl flex justify-center items-center space-x-2 text-sm font-medium hover:bg-slate-800 transition text-[#E5A84B]">
            <Trophy className="w-4 h-4" />
            <span>Mis logros</span>
          </button>
          <button onClick={() => navigate('study-habit')} className="flex-1 bg-[#151B2B] border border-slate-700 py-3 rounded-xl flex justify-center items-center space-x-2 text-sm font-medium hover:bg-slate-800 transition text-[#98CA3F]">
            <Clock className="w-4 h-4" />
            <span>Mi hábito</span>
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-[#151B2B] rounded-2xl border border-slate-800 p-4">
            <div className="text-3xl font-light text-[#98CA3F] mb-1">5</div>
            <div className="text-sm text-slate-400 mb-2">Cursos completados</div>
            <div className="text-xs text-slate-500">+1 este mes</div>
          </div>
          
          <div className="bg-[#151B2B] rounded-2xl border border-slate-800 p-4">
            <div className="text-3xl font-light text-[#98CA3F] mb-1">32h</div>
            <div className="text-sm text-slate-400 mb-2">Horas estudiadas</div>
            <div className="text-xs text-slate-500">+4h esta semana</div>
          </div>
          
          <div className="bg-[#151B2B] rounded-2xl border border-slate-800 p-4">
            <div className="text-3xl font-light text-[#98CA3F] mb-1">7</div>
            <div className="text-sm text-slate-400 mb-2">Racha actual</div>
            <div className="text-xs text-slate-500">Record: 14 dias</div>
          </div>
          
          <div className="bg-[#151B2B] rounded-2xl border border-slate-800 p-4">
            <div className="text-3xl font-light text-[#98CA3F] mb-1">6,000</div>
            <div className="text-sm text-slate-400 mb-2">XP acumulados</div>
            <div className="text-xs text-slate-500">+250 esta semana</div>
          </div>
        </div>

        <h3 className="text-slate-400 text-xs font-semibold tracking-wider mb-4 uppercase">Actividad Reciente</h3>
        
        {/* Chart Section */}
        <div className="mb-6">
          <div className="flex space-x-2 mb-6">
            <button className="bg-[#1A261E] border border-[#98CA3F]/50 text-[#98CA3F] px-4 py-1.5 rounded-full text-sm font-medium">Semanal</button>
            <button className="bg-transparent border border-slate-700 text-slate-400 px-4 py-1.5 rounded-full text-sm font-medium">Mensual</button>
          </div>

          <div className="bg-[#151B2B] rounded-2xl border border-slate-800 p-5 pt-8">
            <div className="flex items-end justify-between h-32 mb-4 px-1">
              {/* Bars: L, M, X, J, V, S, D */}
              <div className="w-8 bg-[#98CA3F] rounded-t-sm" style={{ height: '80%' }}></div>
              <div className="w-8 bg-slate-700/60 rounded-t-sm" style={{ height: '10%' }}></div>
              <div className="w-8 bg-[#98CA3F] rounded-t-sm opacity-90" style={{ height: '60%' }}></div>
              <div className="w-8 bg-[#5A7A2B] rounded-t-sm" style={{ height: '30%' }}></div>
              <div className="w-8 bg-[#98CA3F] rounded-t-sm shadow-[0_0_15px_rgba(152,202,63,0.3)]" style={{ height: '100%' }}></div>
              <div className="w-8 bg-slate-700/60 rounded-t-sm" style={{ height: '8%' }}></div>
              <div className="w-8 bg-slate-700/60 rounded-t-sm" style={{ height: '8%' }}></div>
            </div>
            
            <div className="flex justify-between text-xs text-slate-500 mb-4 px-3">
              <span>L</span><span>M</span><span>X</span><span>J</span><span>V</span><span>S</span><span>D</span>
            </div>

            <div className="flex justify-between items-center text-xs border-t border-slate-800/50 pt-3">
              <span className="text-slate-500">0 min</span>
              <span className="text-[#98CA3F] font-medium">Pico: 90 min (vie)</span>
              <span className="text-slate-500">90 min</span>
            </div>
          </div>
        </div>

        {/* Streak Highlight */}
        <div className="bg-[#151B2B] border border-slate-700 rounded-2xl p-4 flex items-center space-x-4">
          <div className="w-12 h-12 bg-[#1A1810] border border-[#E5A84B]/40 rounded-xl flex items-center justify-center text-[#E5A84B] text-xl font-light">
            7
          </div>
          <div>
            <h4 className="text-white font-medium text-sm">7 dias de racha consecutiva</h4>
            <p className="text-slate-400 text-xs">Sigue manteniendo tu habito diario</p>
          </div>
        </div>

        {/* Botón de Cerrar Sesión */}
        <button 
          onClick={() => navigate('login')}
          className="w-full mt-8 bg-transparent border border-[#F87171]/50 text-[#F87171] py-3.5 rounded-xl flex justify-center items-center space-x-2 text-sm font-medium hover:bg-[#F87171]/10 transition"
        >
          <LogOut className="w-4 h-4" />
          <span>Cerrar sesión</span>
        </button>

      </div>
    </div>
  );
};

// --- APP PRINCIPAL (Navegación y Estado) ---
export default function App() {
  const [currentView, setCurrentView] = useState<ViewName>('login');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const navigate: Navigate = (view, data = null) => {
    if (data) setSelectedCourse(data);
    setCurrentView(view);
    // Para scroll to top simple
    const mainContainer = document.querySelector('.overflow-y-auto');
    if (mainContainer) mainContainer.scrollTop = 0;
  };

  // Vistas que muestran el nav inferior
  const mainViews = ['dashboard', 'my-courses', 'challenges', 'activity'];
  const showBottomNav = mainViews.includes(currentView);

  return (
    <div className="relative max-w-md mx-auto h-screen bg-black overflow-hidden font-sans shadow-2xl sm:border sm:border-slate-800 sm:rounded-[2.5rem]">
      
      {/* Contenedor de Vistas */}
      <div className="h-full w-full">
        {currentView === 'login' && <LoginView navigate={navigate} />}
        {currentView === 'register' && <RegisterView navigate={navigate} />}
        {currentView === 'onboarding' && <OnboardingView navigate={navigate} />}
        {currentView === 'dashboard' && <DashboardView navigate={navigate} />}
        {currentView === 'my-courses' && <MyCoursesView navigate={navigate} />}
        {currentView === 'course-detail' && <CourseDetailView navigate={navigate} course={selectedCourse} />}
        {currentView === 'course-exam' && <CourseExamView navigate={navigate} course={selectedCourse} />}
        {currentView === 'course-learn' && <CourseLearnView navigate={navigate} course={selectedCourse} />}
        {currentView === 'notifications' && <NotificationsView navigate={navigate} />}
        {currentView === 'set-goal' && <GoalSettingView navigate={navigate} course={selectedCourse} />}
        {currentView === 'study-habit' && <StudyHabitView navigate={navigate} />}
        {currentView === 'my-level' && <MyLevelView navigate={navigate} />}
        {currentView === 'achievements' && <AchievementsView navigate={navigate} />}
        {currentView === 'challenges' && <ChallengesView navigate={navigate} />}
        {currentView === 'activity' && <ActivityView navigate={navigate} />}
      </div>

      {/* Bottom Navigation */}
      <div 
        className={`absolute bottom-0 w-full bg-[#0B101E]/95 backdrop-blur-md border-t border-slate-800 px-6 py-4 flex justify-between items-center transition-transform duration-300 ${showBottomNav ? 'translate-y-0' : 'translate-y-full'}`}
      >
        <button onClick={() => navigate('dashboard')} className={`flex flex-col items-center space-y-1 w-16 relative transition ${currentView === 'dashboard' ? 'opacity-100' : 'opacity-50 hover:opacity-80'}`}>
          {currentView === 'dashboard' && <div className="absolute -top-4 w-8 h-1 bg-[#98CA3F] rounded-b-md"></div>}
          <Home className={`w-6 h-6 ${currentView === 'dashboard' ? 'text-[#98CA3F]' : 'text-slate-400'}`} />
          <span className={`text-[10px] ${currentView === 'dashboard' ? 'text-[#98CA3F]' : 'text-slate-400'}`}>Inicio</span>
        </button>
        
        <button onClick={() => navigate('my-courses')} className={`flex flex-col items-center space-y-1 w-16 relative transition ${currentView === 'my-courses' ? 'opacity-100' : 'opacity-50 hover:opacity-80'}`}>
          {currentView === 'my-courses' && <div className="absolute -top-4 w-8 h-1 bg-[#98CA3F] rounded-b-md"></div>}
          <BookOpen className={`w-6 h-6 ${currentView === 'my-courses' ? 'text-[#98CA3F]' : 'text-slate-400'}`} />
          <span className={`text-[10px] ${currentView === 'my-courses' ? 'text-[#98CA3F]' : 'text-slate-400'}`}>Mis cursos</span>
        </button>
        
        <button onClick={() => navigate('challenges')} className={`flex flex-col items-center space-y-1 w-16 relative transition ${currentView === 'challenges' ? 'opacity-100' : 'opacity-50 hover:opacity-80'}`}>
          {currentView === 'challenges' && <div className="absolute -top-4 w-8 h-1 bg-[#98CA3F] rounded-b-md"></div>}
          <Award className={`w-6 h-6 ${currentView === 'challenges' ? 'text-[#98CA3F]' : 'text-slate-400'}`} />
          <span className={`text-[10px] ${currentView === 'challenges' ? 'text-[#98CA3F]' : 'text-slate-400'}`}>Retos</span>
        </button>
        
        <button onClick={() => navigate('activity')} className={`flex flex-col items-center space-y-1 w-16 relative transition ${currentView === 'activity' ? 'opacity-100' : 'opacity-50 hover:opacity-80'}`}>
          {currentView === 'activity' && <div className="absolute -top-4 w-8 h-1 bg-[#98CA3F] rounded-b-md"></div>}
          <User className={`w-6 h-6 ${currentView === 'activity' ? 'text-[#98CA3F]' : 'text-slate-400'}`} />
          <span className={`text-[10px] ${currentView === 'activity' ? 'text-[#98CA3F]' : 'text-slate-400'}`}>Perfil</span>
        </button>
      </div>

    </div>
  );
}