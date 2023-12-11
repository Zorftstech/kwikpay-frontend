import { StaticImageData } from 'next/image';
// import {  blog02, blog03, blog04, blog05, blog06, blog07 } from "../../../public/assets/blog/index";
import blog01  from '../../../public/assets/blogb/blog-01.jpg';
import blog02  from '../../../public/assets/blog/bblog-02.jpg';
import blog03  from '../../../public/assets/blog/bblog-03.jpg';
import blog04  from '../../../public/assets/blog/bblog-04.jpg';
import blog05 from '../../../public/assets/blog/bblog-05.jpg';
import blog06  from '../../../public/assets/blog/bblog-06.jpg';
import blog07  from '../../../public/assets/blog/bblog-077.jpg';

interface BlogContent {
    id: number;
    title: string;
    text: string;
    img: StaticImageData;
    time: string;
}
  
  export const blogs: BlogContent[] = [
    {
        id: 1,
        title: 'Demystifying Payment Gateways: A Comprehensive Guide for All Businesses',
        text: 'This blog post would provide an in-depth explanation of payment gateways, their role in facilitating online transactions, and the various factors to consider when choosing a payment gateway provider. It would also highlight the benefits of using a payment gateway, such as enhanced security, reduced fraud rates, and improved customer experience.',
        img: blog01,
        time: '3 MIN READ',
    },
    {
        id: 1,
        title: 'Simplifying Payment Processing: A Step-by-Step Guide for Seamless Integration',
        text: 'This blog post would provide a practical guide for businesses on how to integrate a payment solution into their website or application. It would cover the technical aspects of integration, including setting up a merchant account, configuring payment methods, and managing transactions. The blog post could also include helpful tips and troubleshooting strategies.',
        img: blog02,
        time: '3 MIN READ',
    },
    {
        id: 1,
        title: 'Enhancing Customer Experience with Frictionless Payment Solutions',
        text: 'This blog post would showcase real-world examples of businesses that have successfully implemented payment solutions to streamline their checkout process and improve customer satisfaction. It would highlight the specific challenges faced by these businesses and how they were overcome through the use of technology.',
        img: blog03,
        time: '3 MIN READ',
    },
    {
        id: 1,
        title: 'Embracing Security in the Digital Age',
        text: 'This blog post would address the growing concerns surrounding cybersecurity and data protection in the realm of online payments. It would outline the various security measures implemented by payment solution providers to safeguard sensitive information and ensure the integrity of transactions. The blog post could also provide tips for businesses on how to protect their own systems and customer data.',
        img: blog04,
        time: '3 MIN READ',
    },
    {
        id: 1,
        title: 'Safeguarding Transactions and Protecting Customer Data',
        text: 'This blog post would address the growing concerns surrounding cybersecurity and data protection in the realm of online payments. It would outline the various security measures implemented by payment solution providers to safeguard sensitive information and ensure the integrity of transactions. The blog post could also provide tips for businesses on how to protect their own systems and customer data.',
        img: blog05,
        time: '3 MIN READ',
    },
    {
        id: 1,
        title: 'Payment Security and Fraud Prevention',
        text: 'This blog post would address the growing concerns surrounding cybersecurity and data protection in the realm of online payments. It would outline the various security measures implemented by payment solution providers to safeguard sensitive information and ensure the integrity of transactions. The blog post could also provide tips for businesses on how to protect their own systems and customer data.',
        img: blog06,
        time: '3 MIN READ',
    },
    {
        id: 1,
        title: 'Navigating the Evolving Landscape of Payment Solutions',
        text: 'This blog post would delve into the latest trends and advancements in the payment solutions industry, discussing emerging technologies like mobile payments, contactless payments, and real-time payments. It would emphasize the importance of staying abreast of these innovations to remain competitive and provide customers with the best possible payment experience.',
        img: blog07,
        time: '3 MIN READ',
    },
  ]