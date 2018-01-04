import React, { Component } from "react";
import styles from "./totalBlock.css"

export default class TotalBlock extends Component {
  render() {
    return (
      <div className={styles.totalBlock}>
        <p className={styles.total}>Итого :</p>
        <p className={styles.totalPrice}>10599 р</p>
        <button className={styles.checkOut}>Оформить заказ</button>
      </div>
    )
  }
}
