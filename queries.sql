/* 1 */
SELECT MAX(salary), name, department_id
FROM employee
GROUP BY department_id
ORDER BY salary DESC;

/* 2 */
SELECT department_id, COUNT(id)
FROM employee
GROUP BY department_id

/* 3 */
SELECT SUM(salary), department_id
FROM employee
GROUP BY department_id

/* 4 */
INSERT INTO department (id, name) VALUES (2, 'Department_2');

/* 5 */
INSERT INTO employee (id, department_id, chief_id, name, salary) VALUES (2, 2, 3, 'John Doe', 1000);
INSERT INTO employee (id, department_id, chief_id, name, salary) VALUES (3, 2, 3, 'John Doen', 2000);
INSERT INTO employee (id, department_id, chief_id, name, salary) VALUES (4, 2, 3, 'John Doer', 3000);
INSERT INTO employee (id, department_id, chief_id, name, salary) VALUES (5, 2, 4, 'John Doee', 3000);

/* 6 */
DELETE FROM employee WHERE department_id = 2;
DELETE FROM department WHERE id = 2;

/* 7 */
UPDATE employee SET department_id = 5 WHERE department_id = 2;
UPDATE department SET id = 5 WHERE id = 2;
