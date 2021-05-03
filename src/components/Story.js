import React from 'react';
// import { LoremIpsum } from 'react-lorem-ipsum';

const Link = ({ url, title }) => (
    <a href={url} target="_blank" rel="noreferrer">
        {title}
    </a>
);
https://www.openindiana.org/2021/05/01/openindiana-hipster-2021-04-is-here/

const Story = ({ story: { id, by, title, kids, time, url } }) => {
    return (
        <div className="story">
            <div className="story-title">
                <Link url={url} title={title} />
            </div>
            <div className="story-description">
                <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                        e who loves pain itself, who seeks af</p>
            </div>

            <div className="story-info">
                <span>
                    by{' '}
                    <Link url={`https://news.ycombinator.com/user?id=${by}`} title={by} />
                </span>
        |<span>
                    {new Date(time * 1000).toLocaleDateString('en-US', {
                        hour: 'numeric',
                        minute: 'numeric'
                    })}
                </span>|
                    <span>
                    <Link
                        url={`https://news.ycombinator.com/item?id=${id}`}
                        title={`${kids && kids.length > 0 ? kids.length : 0} comments`}
                    />
                </span>
            </div>
        </div>
    );
};

export default Story;