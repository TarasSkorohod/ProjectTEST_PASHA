import { Title } from "../title/Title";
import { TitleBg } from "../titleBg/TitleBg";
import { CustomForm } from "../customForm/CustomForm";

export const Contact = () => {
  return (
    <section className="container py-16 relative h-full" id="form">
      <Title tag="h2" cn="mt-24 sm:mt-[6px] md:mt-[112px] lg:mt-[198px] mb-14">
        Зворотній <span className="text-[#203055]">Звязок</span>
        {/* Start Your Service <span className="text-[]">Today</span> */}
      </Title>
      <div className="flex items-center justify-center mb-8">
        <p className="text-base text-center w-[80%]">
            Будь ласка, заповніть необхідну інформацію нижче, і ми зв’яжемося, щоб допомогти вам запланувати
            обслуговування. Якщо у вас виникли запитання або ви хочете почати швидше, телефонуйте.
        </p>
      </div>
      <CustomForm />
      <TitleBg>ФОРМА</TitleBg>
    </section>
  );
};
