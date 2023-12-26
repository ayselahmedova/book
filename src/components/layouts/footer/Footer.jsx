import React from 'react'
import footer from './footer.module.scss';

const Footer = () => {
  return (
    <section className={footer.footer_container}>
        <div className={footer.container}>
            <h2>If you have any queries feel free to ask here.</h2>

            <form>
                <div className={footer.form_group}>
                    <label htmlFor="name" className={footer.form_label}>Name:</label>
                    <input type="text" id="name" className={footer.form_input} placeholder='Enter your name'/>
                </div>
                
                <div className={footer.form_group}>
                    <label htmlFor="email" className={footer.form_label}>Email:</label>
                    <input type="text" id="email" className={footer.form_input} placeholder='Enter your email'/>
                </div>

                <div className={footer.form_group}>
                    <label htmlFor="query" className={footer.form_label}>Query:</label>
                    <textarea type="text" id="query" className={footer.form_input} placeholder='Type your query'/>
                </div>

                <div className={footer.form_group}>
                    <a href="#" className={footer.form_submit}>Submit</a>
                </div>
                
                <p>&copy; 2023 HappyReader. All rights Reserved.</p>

            </form>
        </div>
    </section>
  )
}

export default Footer