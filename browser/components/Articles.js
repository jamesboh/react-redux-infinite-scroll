import React, { Component } from 'react';

export default class Articles extends Component {
	constructor(props) {
		super(props)
		this.infiniteScroll = this.infiniteScroll.bind(this);
	}

	componentDidMount () {
		this.props.onLoadArticles();
		window.addEventListener('scroll', this.infiniteScroll);
	}

	componentDidUpdate() {
		//this is a fallback for a special case for when the article-wrapper is shorther than window height
		if (window.innerHeight > document.getElementById('articles-wrapper').scrollHeight) {
			this.props.nextArticle();
		}
	}

	infiniteScroll () {
		if (this.props.remainingArticles.length) {
			if ((window.innerHeight + window.scrollY) >= document.getElementById('articles-wrapper').scrollHeight) {
				this.props.nextArticle();
				return
			} 
		} else {
			window.removeEventListener('scroll', this.infiniteScroll);
		}
	}

	render () {
		return (
			<section id="articles-wrapper">
				{
					this.props.loadedArticles && this.props.loadedArticles.map(article => {
						return (
							<article key={article.id}>
								<h2 dangerouslySetInnerHTML={{ __html: article.title }}></h2>
								<figure className="hero">
									<picture>
										<img src={article.hero.url} alt={article.hero.alt} />
									</picture>
								</figure>
								<div className="item-content" dangerouslySetInnerHTML={{ __html: article.content }}>
								</div>
							</article>
						)
					})
				}
			</section>
		);
	}
}