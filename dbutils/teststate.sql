-- CLEANUP
DELETE FROM assignments CASCADE;
DELETE FROM boards_user_list CASCADE;
DELETE FROM cards_label_list CASCADE;
DELETE FROM labels CASCADE;
DELETE FROM cards CASCADE;
DELETE FROM board_columns CASCADE;
DELETE FROM boards CASCADE;
DELETE FROM users CASCADE;

-- USER
INSERT INTO users(user_id, avatar, email, first_name, last_name, "password", preferred_color)
VALUES 
	(1, 'test.jpg', 'test@test.edu', 'Jan', 'Kowalski', 'password', '#FFB6C1'),
	(2, 'test2.jpg', 'test2@test2.edu', 'John', 'Nowak', '31212ve12u', '#FF0000');

-- BOARDS
INSERT INTO boards(board_id, board_title, description, img, owner_user_id)
VALUES 
	(1, 'First Table', 'I have created this table only for test purpose', '1.jpg', 1),
	(2, 'Second Table', 'I have created this table only for test purpose', '2.jpg', 2);
	
	
-- COLUMNS
INSERT INTO board_columns(board_columnid, board_column_title, description, owner_board_id)
VALUES
	(1, 'First Column', 'First column description', 1),
	(2, 'Second Column', 'Second column description', 1),
	(3, 'Third Column', 'Third column description', 1),
	(4, 'Fourth Column', 'Fourth column description', 2);
	
-- CARDS
INSERT INTO cards(cardid, card_title, date, description, owner_board_column_id)
VALUES
	(1, 'Card 1', '2020-10-10', 'Card 1 description', 1),
	(2, 'Card 2', '2020-10-10', 'Card 2 description', 1),
	(3, 'Card 3', '2020-10-10', 'Card 3 description', 1),
	(4, 'Card 4', '2020-10-10', 'Card 4 description', 1),
	(5, 'Card 5', '2020-10-10', 'Card 5 description', 1),
	(6, 'Card 6', '2020-10-10', 'Card 6 description', 2),
	(7, 'Card 7', '2020-10-10', 'Card 7 description', 2),
	(8, 'Card 8', '2020-10-10', 'Card 8 description', 2),
	(9, 'Card 9', '2020-10-10', 'Card 9 description', 2),
	(10, 'Card 10', '2020-10-10', 'Card 10 description', 3),
	(11, 'Card 11', '2020-10-10', 'Card 11 description', 3),
	(12, 'Card 12', '2020-10-10', 'Card 12 description', 4),
	(13, 'Card 13', '2020-10-10', 'Card 13 description', 4),
	(14, 'Card 14', '2020-10-10', 'Card 14 description', 4),
	(15, 'Card 15', '2020-10-10', 'Card 15 description', 4),
	(16, 'Card 16', '2020-10-10', 'Card 16 description', 4),
	(17, 'Card 17', '2020-10-10', 'Card 17 description', 4),
	(18, 'Card 18', '2020-10-10', 'Card 18 description', 4),
	(20, 'Card 19', '2020-10-10', 'Card 19 description', 4);

-- LABELS
INSERT INTO labels(labelid, title, color)
VALUES
	(1, 'Label 1', '#FF0000'),
	(2, 'Label 2', '#00FF00'),
	(3, 'Label 3', '#0000FF'),
	(4, 'Label 4', '#a60c2F');
	
-- ATTACH LABELS
INSERT INTO cards_label_list(card_list_cardid, label_list_labelid)
VALUES
	(1, 1),
	(1, 2),
	(2, 2),
	(10, 1),
	(10, 2),
	(10, 3),
	(10, 4),
	(5, 1);
	
-- ATTACH USERS TO CARDS
INSERT INTO assignments(assignment_id, card_id, user_id, assignment_date)
VALUES
	(1, 1, 1, '2003-04-12 04:05:06'),
	(2, 2, 1, '2003-04-12 05:05:06'),
	(3, 3, 1, '2003-04-12 07:05:06'),
	(4, 3, 2, '2003-04-12 09:05:06');
	
-- ATTACH USET TO BOARD
INSERT INTO boards_user_list(user_list_user_id, collaboration_boards_board_id)
VALUES
	(1, 2),
	(2, 1);