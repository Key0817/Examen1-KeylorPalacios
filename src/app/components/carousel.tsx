import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface Repository {
    id: number;
    name: string;
}

interface CarruselProps {
    repos: Repository[];
}

const Carrusel = ({ repos }: CarruselProps) => {
    return (
        <section className='seccionproj'>
            <h1 className='projct'>My <span>Projects</span></h1>
            <Carousel>
                {repos.map((repo) => (
                    <div key={repo.id}>
                        <div className='tarjeta'>
                            <div className="carta container">
                                <h3><a href={`https://github.com/Key0817/${repo.name}`} target="_blank" rel="noopener noreferrer" className='linkRepo'>{repo.name}</a></h3>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </section>
    );
};

            export default Carrusel;
