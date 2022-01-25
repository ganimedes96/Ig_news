import Head  from 'next/head'
import styles from './styles.module.scss'
import Prismic from '@prismicio/client'
import { getPrismicClient } from '../../services/prismic'


export default function Posts(){
    return(
        <>
          <Head>
              <title>Posts | Ignews</title>
          </Head>
           
          <main className={styles.container}>
                    <div className={styles.posts}>
                        <a href='#'>
                            <time>12 de abril de 2022</time>
                            <strong>Do back ao mobile: de onde surgiu a programação fullstack</strong>
                            <p>O mercado da programação é bastante exigente no que se refere às novas tecnologias e conhecimentos em termos de carreiras e experiências. A comunidade é extremamente apaixonada no que faz e precisa, constantemente, se manter atualizada nas tendências do mercado.</p>
                        </a>
                        <a>
                            <time>12 de abril de 2022</time>
                            <strong>Do back ao mobile: de onde surgiu a programação fullstack</strong>
                            <p>O mercado da programação é bastante exigente no que se refere às novas tecnologias e conhecimentos em termos de carreiras e experiências. A comunidade é extremamente apaixonada no que faz e precisa, constantemente, se manter atualizada nas tendências do mercado.</p>
                        </a>
                        <a>
                            <time>12 de abril de 2022</time>
                            <strong>Do back ao mobile: de onde surgiu a programação fullstack</strong>
                            <p>O mercado da programação é bastante exigente no que se refere às novas tecnologias e conhecimentos em termos de carreiras e experiências. A comunidade é extremamente apaixonada no que faz e precisa, constantemente, se manter atualizada nas tendências do mercado.</p>
                        </a>
                        <a>
                            <time>12 de abril de 2022</time>
                            <strong>Do back ao mobile: de onde surgiu a programação fullstack</strong>
                            <p>O mercado da programação é bastante exigente no que se refere às novas tecnologias e conhecimentos em termos de carreiras e experiências. A comunidade é extremamente apaixonada no que faz e precisa, constantemente, se manter atualizada nas tendências do mercado.</p>
                        </a>
                    </div>
            </main>

        </>
    )
}
 
export  const getStaticProps: GetStaticProps = async () => {

    const prismic = getPrismicClient()


    const response = await prismic.query([
        Prismic.predicates.at('document.type', 'publication')
    ],
    {fetch: ['publication.title', 'publication.content'],
     pageSize: 100,  } 
    )

    console.log(JSON.stringify(response, null, 2));

    return{
        props: {}
    }

}


