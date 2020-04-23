function isCollidingLeft(x1, y1, w1, h1, x2, y2, w2, h2) {
    if(x1 < x2 + w2 &&
        x1 > x2 &&
        y1 < y2 + h2 &&
        y1 + h1 > y2)
    {
        return true;
    }
    return false;
}

function isCollidingRight(x1, y1, w1, h1, x2, y2, w2, h2) {
    if(x1 < x2 &&
        x1 + w1 > x2 &&
        y1 < y2 + h2 &&
        y1 + h1 > y2)
    {
        return true;
    }
    return false;
}

function isColliding(x1, y1, w1, h1, x2, y2, w2, h2) {
    if(x1 < x2 + w2 &&
        x1 + w1 > x2 &&
        y1 < y2 + h2 &&
        y1 + h1 > y2)
    {
        return true;
    }
    return false;
}

function isCollidingTop(x1, y1, w1, h1, x2, y2, w2, h2) {
    if(x1 < x2 + w2 &&
        x1 + w1 > x2 &&
        y1 < y2 &&
        y1 + h1 > y2)
    {
        return true;
    }
    return false;
}

function isCollidingBot(x1, y1, w1, h1, x2, y2, w2, h2) {
    if(x1 < x2 + w2 &&
        x1 + w1 > x2 &&
        y1 < y2 + h2 &&
        y1 > y2)
    {
        return true;
    }
    return false;
}