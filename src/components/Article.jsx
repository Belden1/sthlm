import React from 'react';
import './Article.css';

function Article() {
	return (
		<>
			<article className="article-container">
				<div className="article-header">
					<h1>Ny huvudtränare, Sven Svensson</h1>
				</div>
				<div className="article-content">
					<p>
						STHLM City FC har nu tillsatt sin nye huvudtränare, och valet föll på Sven Svensson. Ett avtal
						som sträcker sig över tre år är påskrivet och Sven Svensson tillträder formellt efter
						årsskiftet.
					</p>
					<div className="article-footer">
						<a href="#">Läs mer</a>
						<p className="article-meta">Publicerad 2023-12-16 08.50</p>
					</div>
				</div>
			</article>
		</>
	);
}

export default Article;
