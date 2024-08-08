import React, { useState } from 'react';
import Tooltip from './Tooltip';   

const sentimentColors = {
    Positive: '#D9F2DD',
    Negative: '#F2DBD9',
    Mixed: '#e8bd6d3d',
    Neutral: '#eaf09b6b',
};

const ReviewHighlighter = ({ review }) => {
    const [hoveredSentence, setHoveredSentence] = useState(null);  
    const [tooltipTopic, setTooltipTopic] = useState(null);       

   
    const highlightSentences = () => {
        let content = review.content;
        const analytics = review.analytics;

        analytics.forEach(({ sentences, sentiment, topic }) => {
            sentences.forEach(sentence => {
                const coloredSentence = `<span 
                    class="highlight" 
                    style="background-color: ${sentimentColors[sentiment]}"
                >${sentence}</span>`;
                content = content.replace(sentence, coloredSentence);
            });
        });
        

        return { __html: content };  // Using dangerouslySetInnerHTML to render the highlighted content
    };

    return (
        <div className="review">
            <h3>{review.reviewer_name}</h3>
            <div 
                className="review-content"
                dangerouslySetInnerHTML={highlightSentences()}  // Render highlighted content
            ></div>
            {hoveredSentence && <Tooltip topic={tooltipTopic} />}  // Show Tooltip if a sentence is hovered
        </div>
    );
};

export default ReviewHighlighter;
