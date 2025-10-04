import React, { useState, useEffect } from 'react';

// Local images from the project's image/ folder
const img1 = new URL('../image/z7079827342304_a79446ae01e032d67aeb92755c176c92.jpg', import.meta.url).href;
const img2 = new URL('../image/z7079827353472_b90ca4c49d7c860f3da9b88446adf2a4.jpg', import.meta.url).href;
const img3 = new URL('../image/z7079827362344_da72b17524a4ca86e0950369a6288535.jpg', import.meta.url).href;
const img4 = new URL('../image/z7079827368485_72716356021327f3c43f875629cb36b0.jpg', import.meta.url).href;

// A new data structure to intersperse text and images naturally
const storyContent = [
    {
        text: "Hôm nay là tròn 2 năm anh chính thức biến con số 0,00001 thành 100, hehe. Anh luôn thấy mình thật may mắn vì đã có em bên cạnh. Em như là một món quà đến với anh vậy. Cảm ơn em đã đến và ở bên anh, mang theo tất cả sự dịu dàng, ấm áp và trở thành phần không thể thiếu trong cuộc sống của anh.",
    },
    {
        image: img1,
        text: "Tấm hình đầu tiên em gửi anh, và đây cũng là tấm hình khởi nguồn cho tình yêu trong anh. Anh vẫn còn nhớ như in khoảnh khắc anh nhận được tấm này, cảm giác như lúc đó, em sẽ ở bên anh luôn vậy. Tấm này đẹp ghia, vẫn là 1 trong những tấm hình anh thích nhất.",
    },
    {
        image: img2,
        text: "Anh yêu cách em quan tâm đến mọi người xung quanh, yêu cả sự thông minh và dí dỏm trong mỗi cuộc trò chuyện của chúng ta. Ở bên em, anh luôn được là chính mình, được lắng nghe và thấu hiểu. Tấm này cũng dị, luôn nằm trong top.",
    },
    {
        image: img3,
        text: "Em chính là động lực lớn nhất để anh trở nên tốt hơn mỗi ngày, là cuộc sống của anh hiện tại và cả tương lai sau này. Anh mong mình sẽ đi cùng nhau trong tất cả các sự kiện sau này.",
    },
    {
        text: "Và em hãy luôn nhớ, em là số một, là độc nhất vô nhị. Cho dù bất cứ chuyện gì, hãy nhìn về phía sau, em sẽ luôn nhìn thấy anh. Hãy mạnh mẽ và khiến tất cả những thứ ngáng đường em phải đầu hàng giống như anh đang đầu hàng em nè!",
        image: img4,
    },
];


interface AnimatedSectionProps {
    children: React.ReactNode;
    delay: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, delay }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), delay);
        return () => clearTimeout(timer);
    }, [delay]);

    return (
        <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {children}
        </div>
    );
};

export const CardContent: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-screen p-4 md:p-8">
            <div className="relative bg-stone-50 rounded-lg shadow-2xl max-w-4xl w-full h-[90vh]">
                <div className="overflow-y-auto h-full p-8 md:p-12 space-y-12 text-rose-800">

                    {/* Map through the new story content */}
                    {storyContent.map((item, index) => (
                        <AnimatedSection key={index} delay={1500 + index * 400}>
                            <div className={`flex flex-col md:flex-row gap-6 md:gap-8 items-center ${index % 2 !== 0 && item.image ? 'md:flex-row-reverse' : ''}`}>
                                {item.image && (
                                    <div className="w-full md:w-2/5 flex-shrink-0">
                                        <img src={item.image} alt={`Memory ${index + 1}`} className="w-full h-auto object-cover rounded-lg shadow-lg" />
                                    </div>
                                )}

                                {item.text && (
                                    <div className="w-full">
                                        <p className="text-lg md:text-xl leading-relaxed text-center md:text-left">{item.text}</p>
                                    </div>
                                )}
                            </div>
                        </AnimatedSection>
                    ))}

                    <AnimatedSection delay={1500 + storyContent.length * 400}>
                        <div className="text-center space-y-4 pt-8 pb-16">
                            <p className="text-lg md:text-xl leading-relaxed">
                                Hành trình của chúng ta vẫn còn dài phía trước. Sẽ có những thử thách, nhưng anh tin rằng chỉ cần chúng ta còn nắm tay nhau, mọi khó khăn đều chỉ là con muỗi, và muỗi thì sẽ bị chích điện hoặc bị đập bẹp dí hehe. Mong rằng chúng ta sẽ có thêm thật nhiều những kỷ niệm 2 năm, 5 năm, 10 năm và hơn thế nữa...
                            </p>
                            <p className="font-display italic font-semibold text-5xl text-rose-500 pt-4">Yêu em rất nhiều!</p>
                            <p className="text-lg font-semibold">- Ký tên -</p>
                            <p className="text-xl font-semibold">LUNAV</p>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </div>
    );
};
