import { signIn, useSession } from 'next-auth/react';
import { api } from '../../services/api';
import { getSTripeJs } from '../../services/stripe-js';
import styles from './styles.module.scss';




interface SubscribeButtonProps{
    priceId: string;

}
export function SubscriberButton({priceId}: SubscribeButtonProps){
    
    const { data: session } = useSession()

    
   async function handleSubscriber(){
        if(!session){
            signIn('github')
            return
        }
        try {
            const response = await api.post('/subscribe')

            const {sessionId } = response.data

            const stripe = await getSTripeJs()

            await stripe.redirectToCheckout({sessionId})
        }catch(err){
            alert(err.message)
        }
    }

    
    return(
        <button
        type="button"
        className={styles.subscribeButton}
        onClick={handleSubscriber}
       >
           Subscribe now
        </button>
        
    )
}