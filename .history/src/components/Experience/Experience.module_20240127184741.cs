@import "../../vars.css";

.container {
  color: var(--color-text);
  margin-top: 79px;
  margin-left: 10%;
  margin-right: 10%;
}

.title {
  color: var(--color-text);
  font-size: 35px;
  font-weight: 700;
  letter-spacing: 1.75px;
  text-transform: uppercase;
}

.content {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 14px;
}

.skills {
  width: 45%;
  display: flex;
  flex-wrap: wrap;
  gap: 37px;
}

.skill {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 11px;
}

.skillImageContainer {
  background-color: var(--color-secondary);
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
}

.skillImageContainer img {
  width: 75px;
}

.skill p {
  font-size: 25px;
  font-family: var(--font-roboto);
  font-weight: 500;
}

.history {
  width: 45%;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.historyItem {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 17px;
  background: #19376d;
  background: linear-gradient(90deg, #19376d 0%, rgba(25, 55, 109, 0) 100%);
  border-radius: 10px;
  padding: 24px;
}

.historyItem img {
  width: 50px;
}

.historyItemDetails {
  font-family: var(--font-roboto);
}

.historyItemDetails h3 {
  font-size: 30px;
  font-weight: 500;
}

.historyItemDetails p {
  font-size: 20px;
  font-weight: 300;
}

.historyItemDetails ul {
  margin-top: 6px;
  list-style-position: inside;
  font-size: 25px;
  list-style-type: disc;
  margin-left: 17px;
}

@media screen and (max-width: 830px) {
  .content {
    flex-direction: column;
    align-items: center;
    gap: 34px;
  }

  .skills {
    width: 100%;
    flex-direction: row;
    justify-content: center;
  }

  .history {
    width: 100%;
    gap: 9px;
  }
}