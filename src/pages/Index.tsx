import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [calculatorData, setCalculatorData] = useState({
    projectType: '',
    complexity: [5],
    features: [] as string[],
    timeline: [4]
  });

  const [estimatedCost, setEstimatedCost] = useState(0);

  const services = [
    {
      icon: 'Code',
      title: 'Веб-разработка',
      description: 'Создание современных сайтов и веб-приложений с использованием последних технологий',
      features: ['React/Vue.js', 'Node.js/Python', 'Адаптивный дизайн', 'SEO оптимизация']
    },
    {
      icon: 'Smartphone',
      title: 'Мобильные приложения',
      description: 'Разработка нативных и кроссплатформенных мобильных приложений',
      features: ['iOS/Android', 'React Native', 'Flutter', 'App Store/Play Market']
    },
    {
      icon: 'Database',
      title: 'Backend разработка',
      description: 'Серверная архитектура, API, базы данных и интеграции',
      features: ['REST/GraphQL API', 'Микросервисы', 'Cloud решения', 'DevOps']
    },
    {
      icon: 'Palette',
      title: 'UI/UX Дизайн',
      description: 'Современный дизайн интерфейсов с фокусом на пользовательский опыт',
      features: ['Прототипирование', 'Дизайн-системы', 'Пользовательские исследования', 'A/B тестирование']
    }
  ];

  const calculateCost = () => {
    let baseCost = 50000;
    
    switch (calculatorData.projectType) {
      case 'landing':
        baseCost = 30000;
        break;
      case 'corporate':
        baseCost = 80000;
        break;
      case 'ecommerce':
        baseCost = 150000;
        break;
      case 'mobile':
        baseCost = 200000;
        break;
      default:
        baseCost = 50000;
    }

    const complexityMultiplier = calculatorData.complexity[0] / 5;
    const featuresMultiplier = 1 + (calculatorData.features.length * 0.2);
    const timelineMultiplier = calculatorData.timeline[0] <= 2 ? 1.5 : calculatorData.timeline[0] >= 8 ? 0.8 : 1;

    const total = baseCost * complexityMultiplier * featuresMultiplier * timelineMultiplier;
    setEstimatedCost(Math.round(total));
  };

  React.useEffect(() => {
    calculateCost();
  }, [calculatorData]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="gradient-bg text-white py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Icon name="Zap" size={28} className="text-white" />
            <span className="text-xl font-bold">IT Solutions</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#hero" className="hover:text-turquoise transition-colors">Главная</a>
            <a href="#services" className="hover:text-turquoise transition-colors">Услуги</a>
            <a href="#calculator" className="hover:text-turquoise transition-colors">Калькулятор</a>
            <a href="#contact" className="hover:text-turquoise transition-colors">Контакты</a>
          </nav>
          <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-coral">
            Получить консультацию
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="gradient-bg text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Современные <br />
                <span className="text-turquoise">цифровые решения</span><br />
                для вашего бизнеса
              </h1>
              <p className="text-xl mb-8 text-white/90 leading-relaxed">
                Профессиональная разработка веб-сайтов, мобильных приложений и комплексных IT-решений. 
                Воплотим ваши идеи в цифровую реальность.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-coral hover:bg-white/90 text-lg px-8 py-3">
                  <Icon name="Rocket" size={20} className="mr-2" />
                  Начать проект
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-coral text-lg px-8 py-3">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="/img/a57e7868-7af3-42a8-954e-6da087587518.jpg" 
                alt="Современные IT решения"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Наши услуги</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный спектр IT-услуг для развития вашего бизнеса в цифровой среде
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in border-0 bg-white">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 w-16 h-16 gradient-bg rounded-xl flex items-center justify-center">
                    <Icon name={service.icon as any} size={28} className="text-white" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <Icon name="Check" size={16} className="text-coral mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Калькулятор стоимости</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Получите предварительную оценку стоимости вашего проекта
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Рассчитайте стоимость проекта</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <Label className="text-base font-semibold mb-3 block">Тип проекта</Label>
                      <Select value={calculatorData.projectType} onValueChange={(value) => 
                        setCalculatorData(prev => ({ ...prev, projectType: value }))
                      }>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите тип проекта" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="landing">Лендинг-страница</SelectItem>
                          <SelectItem value="corporate">Корпоративный сайт</SelectItem>
                          <SelectItem value="ecommerce">Интернет-магазин</SelectItem>
                          <SelectItem value="mobile">Мобильное приложение</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label className="text-base font-semibold mb-3 block">
                        Сложность проекта: {calculatorData.complexity[0]}/10
                      </Label>
                      <Slider
                        value={calculatorData.complexity}
                        onValueChange={(value) => setCalculatorData(prev => ({ ...prev, complexity: value }))}
                        max={10}
                        min={1}
                        step={1}
                        className="w-full"
                      />
                    </div>

                    <div>
                      <Label className="text-base font-semibold mb-3 block">
                        Сроки разработки: {calculatorData.timeline[0]} недель
                      </Label>
                      <Slider
                        value={calculatorData.timeline}
                        onValueChange={(value) => setCalculatorData(prev => ({ ...prev, timeline: value }))}
                        max={12}
                        min={1}
                        step={1}
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <Label className="text-base font-semibold mb-3 block">Дополнительные функции</Label>
                      <div className="space-y-3">
                        {['CRM интеграция', 'Многоязычность', 'Онлайн-платежи', 'SEO оптимизация', 'Аналитика'].map((feature) => (
                          <label key={feature} className="flex items-center space-x-3 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={calculatorData.features.includes(feature)}
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setCalculatorData(prev => ({
                                    ...prev,
                                    features: [...prev.features, feature]
                                  }));
                                } else {
                                  setCalculatorData(prev => ({
                                    ...prev,
                                    features: prev.features.filter(f => f !== feature)
                                  }));
                                }
                              }}
                              className="rounded border-gray-300 text-coral focus:ring-coral"
                            />
                            <span className="text-sm">{feature}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-coral/10 to-turquoise/10 p-6 rounded-xl">
                      <h3 className="text-lg font-semibold mb-2">Предварительная стоимость</h3>
                      <div className="text-3xl font-bold gradient-text">
                        {estimatedCost.toLocaleString('ru-RU')} ₽
                      </div>
                      <p className="text-sm text-gray-600 mt-2">
                        Точная стоимость рассчитывается индивидуально
                      </p>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="text-center">
                  <Button size="lg" className="gradient-bg text-white hover:opacity-90 px-8 py-3">
                    <Icon name="Send" size={20} className="mr-2" />
                    Получить подробный расчет
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Свяжитесь с нами</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Готовы обсудить ваш проект? Оставьте заявку и мы свяжемся с вами в течение часа
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Оставить заявку</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-base font-semibold">Имя</Label>
                    <Input id="name" placeholder="Ваше имя" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-base font-semibold">Телефон</Label>
                    <Input id="phone" placeholder="+7 (999) 123-45-67" className="mt-2" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-base font-semibold">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" className="mt-2" />
                </div>

                <div>
                  <Label htmlFor="project" className="text-base font-semibold">Расскажите о проекте</Label>
                  <Textarea 
                    id="project" 
                    placeholder="Опишите ваши цели, требования и пожелания..."
                    className="mt-2 min-h-[120px]"
                  />
                </div>

                <Button className="w-full gradient-bg text-white hover:opacity-90 text-lg py-3">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>

                <div className="text-center text-sm text-gray-600">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Zap" size={24} />
                <span className="text-xl font-bold">IT Solutions</span>
              </div>
              <p className="text-white/80">
                Создаем современные цифровые решения для развития вашего бизнеса
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-white/80">
                <li>Веб-разработка</li>
                <li>Мобильные приложения</li>
                <li>Backend решения</li>
                <li>UI/UX Дизайн</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Компания</h3>
              <ul className="space-y-2 text-white/80">
                <li>О нас</li>
                <li>Портфолио</li>
                <li>Команда</li>
                <li>Карьера</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-white/80">
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>hello@itsolutions.ru</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>Москва, ул. Примерная, д. 1</span>
                </div>
              </div>
            </div>
          </div>
          
          <Separator className="my-8 bg-white/20" />
          
          <div className="text-center text-white/60">
            © 2024 IT Solutions. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;