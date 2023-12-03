import './Company.css'
import { company } from '../../../config/defaultconfig'

export default function Company() {

    return (
        <main className='container-company-detail'>
            <div className="company-detail">
                <article className="company-info">
                    <img src={company.imgURL} alt={company.name}></img>
                    <h1>{company.name}</h1>
                </article>
                <div className="company-desc">
                    <p>{company.description}</p>
                </div>
                <div className="company-column-obj">
                    <div className="company-obj-general column-about">
                        <article>
                            <h2>General Objective</h2>
                            <p>{company.general_objective}</p>
                        </article>
                    </div>
                    <div className="company-obj-specific column-about">
                        <h2>Specific Objective</h2>
                        <article>
                            <h4>{company.specific_objectives.one.title}</h4>
                            <p>{company.specific_objectives.one.description}</p>
                        </article>
                        <article>
                            <h4>{company.specific_objectives.two.title}</h4>
                            <p>{company.specific_objectives.two.description}</p>
                        </article>
                        <article>
                            <h4>{company.specific_objectives.three.title}</h4>
                            <p>{company.specific_objectives.three.description}</p>
                        </article>
                        <article>
                            <h4>{company.specific_objectives.four.title}</h4>
                            <p>{company.specific_objectives.four.description}</p>
                        </article>
                    </div>
                </div>
                <div className="company-column-limit">
                    <div className="company-scope-website column-limit">
                        <h2>Scope of the website</h2>
                        <article>
                            <h4>{company.scope_website.one.title}</h4>
                            <p>{company.scope_website.one.description}</p>
                        </article>
                        <article>
                            <h4>{company.scope_website.two.title}</h4>
                            <p>{company.scope_website.two.description}</p>
                        </article>
                        <article>
                            <h4>{company.scope_website.three.title}</h4>
                            <p>{company.scope_website.three.description}</p>
                        </article>
                    </div>
                    <div className="company-limited-website column-limit">
                        <h2>Limited of the website</h2>
                        <article>
                            <h4>{company.limited_website.one.title}</h4>
                            <p>{company.limited_website.one.description}</p>
                        </article>
                        <article>
                            <h4>{company.limited_website.two.title}</h4>
                            <p>{company.limited_website.two.description}</p>
                        </article>
                        <article>
                            <h4>{company.limited_website.three.title}</h4>
                            <p>{company.limited_website.three.description}</p>
                        </article>
                        <article>
                            <h4>{company.limited_website.four.title}</h4>
                            <p>{company.limited_website.four.description}</p>
                        </article>
                        <article>
                            <h4>{company.limited_website.five.title}</h4>
                            <p>{company.limited_website.five.description}</p>
                        </article>
                        <article>
                            <h4>{company.limited_website.six.title}</h4>
                            <p>{company.limited_website.six.description}</p>
                        </article>
                        <article>
                            <h4>{company.limited_website.seven.title}</h4>
                            <p>{company.limited_website.seven.description}</p>
                        </article>
                    </div>
                </div>
            </div>
        </main>
    )
}