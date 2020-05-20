-- 1.Show the total population of the world.

SELECT continent, ROUND(SUM(GDP),2) 
FROM world
GROUP BY continent
ORDER BY 2 DESC

-- 2. List all the continents - just once each.

SELECT DISTINCT continent FROM world;

-- 3.
-- Give the total GDP of Africa

SELECT SUM(gdp) FROM world WHERE continent = 'Africa';

-- 4.
-- How many countries have an area of at least 1000000

SELECT COUNT(name) FROM world WHERE area > 1000000;

-- 5.
-- What is the total population of ('Estonia', 'Latvia', 'Lithuania')

SELECT SUM(population) FROM world WHERE name = 'Estonia' OR name = 'Latvia' OR name = 'Lithuania';
