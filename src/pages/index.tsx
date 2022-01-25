import Head from 'next/head'; 
import {stripe} from '../services/stripe';
import { GetStaticProps } from 'next';

import { SubscriberButton } from '../components/SubscribeButton';

import styles from './home.module.scss'

interface HomeProps{
  product:{
    priceId: string;
    amount: number;
  }
}

export default function Home({product}: HomeProps) {
  return (
    <>
    <Head>
      <title>Home | ignews</title>
    </Head>
     <main className={styles.contentContainer}>
      <section className={styles.hero}>
          <span>
            <img src="https://raw.githubusercontent.com/kaueMarques/kaueMarques/master/hi.gif" width="30px"/>
               
               Hey, welcome</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>
            Get access to all publications <br/>
            <span>for {product.amount} month</span> 
          </p>
          <SubscriberButton priceId={product.priceId}/>
      </section> 
      <img src="/images/avatar.svg" alt="Girl coding" />  
    </main> 
    
    </>
  )
}

export const getStaticProps: GetStaticProps = async () =>{
  const price = await stripe.prices.retrieve('price_1KF1CuI9CSFLDtaDjh13z4Xe')
  
  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US',{
      style: 'currency',
      currency: 'USD',
    }).format(price.unit_amount/100),
  }
  return{
      props:{
        product,
      },
      revalidate: 60*60*24,
  }
}