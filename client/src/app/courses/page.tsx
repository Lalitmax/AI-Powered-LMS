import React from 'react';
import Card from '@/components/Card';
import { Header } from '@/components/HeaderPage';
import CardTopic from '@/components/CardTopic';

const page = () => {
    return (<>
        <Header></Header>
        <div className="flex-wrap flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 gap-x-14 gap-y-5 px-9">
            <Card
                title="Complete DSA Roadmap"
                imageUrl="/assetsa\courses\dsaCheck.png"
                originalPrice={4800}
                discountedPrice={2199}
                discountPercentage={57}
            />
            <Card
                title="Core Jubjects"
                imageUrl="/assetsa\courses\corejubjects.png"
                originalPrice={4800}
                discountedPrice={2199}
                discountPercentage={57}
            />
            <Card
                title="Mern  Stack"
                imageUrl="/assetsa\courses\mernStack.png"
                originalPrice={4800}
                discountedPrice={2199}
                discountPercentage={57}
            />

            <Card
                title="Core  Java"
                imageUrl="/assetsa\courses\coreJava.png"
                originalPrice={4800}
                discountedPrice={2199}
                discountPercentage={57}
            />

            <CardTopic title="Amazing Course"
                imageUrl="/assetsa/courses/dsaWithJava.png" />



        </div>


    </>

    );
};

export default page;
