import styled from 'styled-components';
import Center from '../components/Center';
import Breadcrumb from '../components/Breadcrumb';

const Wrapper = styled.div`
    .about-container {
        display: grid;
        grid-template-columns: 1fr;
        gap: 5rem;
        padding: 80px 20px;
        img {
            height: 500px;
            width: 100%;
            object-fit: cover;
        }
        h2 {
            margin-bottom: 12px;
            font-size: 32px;
            line-height: 1.25;
            letter-spacing: 0.1;
        }
        .underline {
            width: 6rem;
            height: 0.25rem;
            background-color: var(--primary-color);
        }
        p {
            margin-top: 32px;
            line-height: 2;
            color: #617d98;
        }
    }
    @media (min-width: 768px) {
        .about-container {
            grid-template-columns: 1fr 1fr;
            h2 {
                font-size: 40px;
            }
        }
    }
`;

export default function AboutPage() {
    return (
        <Wrapper>
            <Breadcrumb title={'About'} />
            <Center>
                <div className="about-container">
                    <div>
                        <img src="https://react-course-comfy-sloth-store.netlify.app/static/media/hero-bcg.a876f19f6786a3aca992.jpeg" />
                    </div>
                    <div>
                        <h2>Our Story</h2>
                        <div className="underline"></div>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Fugiat accusantium sapiente tempora sed dolore
                            esse deserunt eaque excepturi, delectus error
                            accusamus vel eligendi, omnis beatae. Quisquam,
                            dicta. Eos quod quisquam esse recusandae vitae neque
                            dolore, obcaecati incidunt sequi blanditiis est
                            exercitationem molestiae delectus saepe odio
                            eligendi modi porro eaque in libero minus unde
                            sapiente consectetur architecto. Ullam rerum, nemo
                            iste ex, eaque perspiciatis nisi, eum totam velit
                            saepe sed quos similique amet. Ex, voluptate
                            accusamus nesciunt totam vitae esse iste.
                        </p>
                    </div>
                </div>
            </Center>
        </Wrapper>
    );
}
