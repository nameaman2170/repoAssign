import React from 'react'
import FeatureUtil from './FeatureUtil'

function Features() {
    return (
        <div className="features">
            <FeatureUtil 
                dval="Jan 06 . Blog"
                hval="24,895 Hours later"
            />
            <FeatureUtil 
                dval="Oct 19 . News"
                hval="FIGMA wanted Our CEO's insight for some screen"
            />
            <FeatureUtil 
                dval="Oct 12 . News"
                hval="This Guy really won't shut up"
            />
        </div>
    )
}

export default Features
