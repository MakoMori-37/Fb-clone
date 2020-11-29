import React, { useState } from "react";
import "./LeftBar.css";
import LeftItem from "./LeftItem";
import ArrowDropDownOutlinedIcon from "@material-ui/icons/ArrowDropDownOutlined";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";

function LeftBar() {
  const [seemore, setSeemore] = useState(false);
  const [seemoreb, setSeemoreb] = useState(false);


  const toggle = () => {
    setSeemore((prev) => !prev);
  };

  const toggleb = () => {
    setSeemoreb((prev) => !prev);
  };
  return (
    <div className="leftbar">
      <LeftItem
        item="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSEBAVFRUVGBUYFRYVFRUWFhYVFRUYGBYXFRcYHSggGBolGxcWIjEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQFy0dHyUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIDBAUGBwj/xABDEAABAwEFBAgBCQYFBQAAAAABAAIRAwQFEiExBkFRYRMiMnGBkaGxwQcUI0JSYnLR8CQzgpKi4TRzssLxFTVDVJP/xAAYAQADAQEAAAAAAAAAAAAAAAAAAQIDBP/EACURAQEAAgICAQQCAwAAAAAAAAABAhEDMSFBMhIiUWETcQRCgf/aAAwDAQACEQMRAD8A9wQhCAEj9Eqa/RAqClqrCr0dVYCdTEFTVSqN+qkCAEsIAQUjIlhCVMQgQUjnRmuZv3ajB1aIk/aIyHcN6nLKY9nJa6aUjXg6GV4nfu0lZ04qzjrvy8AueujaevTqRTqOEnPcBOWYUTkt9H9Ovb6OlC8dvjbW15YapaQBkIE+it3B8pNUODbSA8cQIcPz7k/r1dUfR+Hq6FVu68KddgqUnBzTw9jwKtK0o6qalqJEyCEIQAhCRAKiUIKAEIQgLKEISUE2ponJtTRBVXo6qyq1DVWk8iiu7VSqN2qkCBDkFIlSMgQShZl/23o6RjtHId5yCLdQ5GZfd5Yy5jXQxgl7t2WvgvHdqdsA95p2cw0Eid5jmur2+tTqVnZZ2E46wJcd8QYHmZWHs3scyAXzKwtndaTG3xHEuNZ0k4j4k+6sU7I9tMHCc3SeOQy916vT2WpjTLwCdatn2ER+SX8n6X/D+3l1O3Y+o4QRoSSTHAypaLJy/RjhzCv7SbPuou6Rg0zy4c1Us2TgPquzCdsy8o+m43TpdlNoKlmqBwMgwKjdzhuI4Fe02K1NqsbUYZa4SF4I5kET3HmDvXf/ACd3wQ75u85OnDO541A5EeyMM9XQyx3Nu+qapEP1QuhiEIQgBCIQgESpEqAEIQgLKEISUE2ponJtTRAqvQ1VpVqCsJ3tOKE6qRRnVSBBQ5BQgpKNXL3tU6S0tp7mAOPe7JvsV0tZ0NJXJ2V81KtT72Xc0CPX3WXLk0wm3G7Qjp7eRGTBHdn+ULpbus+ELlheLm1qrm0HVCXRiGQ6uSu2Pal2KKlBzfP4hZbjfGV2TBkm1GBMsloD2gjeo7bbWUxLz6J7P2yr4soc0yF5xbrPgdh0gkj9d0rvq+0tAkjDU78P91yG0lppOcHUnAgxlBBHeClE5zwVwBY0nuMq3YapY9jmnrCD/Ewge49VnUagNLLfHnofWPJW6eeEjiPNwj3lTUx7TY7SKjGvGjgD57lMuf2NtWOkW/ZIj8LxI9ZXQhdeF3NufKaughCFRBEoQEAIQmygHJEIQFpCEJKCbU0TkyqckQVDQVhV6Ksp1OKDepQohqpQgQ5IlSFJSlelSGeZ8hPwXJ0qoa0zuYXd8ucR6NW3tRacLHfdp1HekfELi70rkC0tH1RTpDvwhsDxcVycl3lY6OOax25a773qvf0VCmMRcZe8w0SZO7M57pT7n2qdUrmz12NJxOY1zdQ5ri0Yx9UEwO9wXR2S424AMIkb43qzRuVjTiwNJmZIEyM9deCfjrTTV/LUugZKK83NaC5/ZGZKvWOjhaoLbZRUGFwkGPQyEteBO3D2za6lSfHzapBAdiwfVcSA47wDB1WbtFbaNoo9LRaJac8ocIOYK6q8NkqVaq2rVbicwANMmYBkA8RrrOqp3nssxrXuaDLpLjxnWeKLqdDVu96cZd1fKOIPmDPwK1qFSGgjd8D/AHXN2ZxZIOrSfTd7rYuurLHcsX5q7PDnl1XouwNr+mczc5h/oMj0cV3y8m2KrxbGc3kfzU9PML1hacPx0nk7KhCRaswhCEAIQhACEIQFpCEJKCZUT0ypogqioqcqClqrBTpRXGqmChbqpgiiHIKEhSU5HaerNUt3EUmnudWaHei4e763Svbxr2irVM/YpQ1v9XseC6TaavFS0PJyYxv9QeBHcWjzC4vZ+3Bt49EdKdOkIOoMk1B/PUdPcuPHzla6r4kj0NjMITaZDnwSA0DE4ngP+VDbq8OUPzLpWkHQjPdlvB5K/avTRdb6Z0cI3d3FDnxzCxWXBZ8HR4GmnGHBkWR3K/ZLKGNDQ5xAECTMAczmfFA1GiwSlewEEFVqVSMk6rVyQHjO11m6K1VWt0PWHcQSfVJclTtD7zvZR7V2zpLbV4NGD0/NMuww8ju9WAq/9XNl8nS7PWnDaWO4VKZ917eV892CtFSZ3s8xK+gqTpaDxAPmE+Lujk6hwSoSLZkUpJSIQCpU1CAVCRCAuIQhJQTKmiemVdEQqhoqyVWoaqyU8inSszVThQU9VOAiiHJrylTK2h7lN6VHm1/uHR2jFPWq0mZcC+D6GV5HY7zw3g2sT23uB7qhJHqQvTdq6pFnJGWKvUM8cGIfADwXjF5Ay7kY8jkufgm5W3Plqx9AnrsDuMLFvCnbHOw4iLOYJ6OMc7wZ3Kt8nF+i00AxxHSMgOHPj3FdlaaJwxuIzT1qtMM5uVxbaFLdXtAyz6rT1ss8h3q7dd5WgOFPA6szL6WMGHjiDj+auUbmwnJ5jhlC1qVPCISdPLyYWax3/wBJSzzUV52gMpucdwKmJheffKTtDhZ0FM9d3a+61Em/Dmyuptw1Or0lZ7/tFx/XqtSxiC08h/SD8AsOxHCO4O9lsWSpk3uP+ly2rlOstXrH8X5r6Lux80aZ4sb7BfNViqZz98f6V9IXI79npfgb7KcPkvP4r8pJTZSrZkUFKUxEoB0oSIQCoSShAXUIQkoJlXRPUdbRBVFQ1VgqvQ1Vgp5dlFenqpwq9HVToKHKO0nqnuTwoLa6GFRn8avHuPK9sqf7KOT3H+apPuD5Lx28Wy53P817VtIzHQe2dWB0cw6of9w8l45eNKC7x9HELD/Gvpv/AJMVLjvSrZazatF0EEAjc5pOYcF7Tde3FKvTGL6OoBmDoe4714aKZJgfqM5XUXS4dUnRwW3Iw4b6esUr8Z9oeabatoqTRm8dwXIULBTOcKyyws3ALDbq8/hYvDaR9SW0Gxxe7Qdw3rzy/e2ZJcScydV3VsAYwgDNee3lWxVDwH69Srw7Z8nSJphjuYjxJz+K0KbobP3fi4fFZLnTA4fBX6zob5eklaVjElgzwf5nwC+k7mH0FMfdC+Z7sJmmOJnxxNX0zdAijT/C32U4fJWXxXYQEiFszKkQhALKAUiEAqEiEBfQhCSgo62ikUdbREKobPqrJVaz6qy7RPLsselWjqrCr0NVYQUOCz75qQzzPgAf7K+Fz22VqwWes4atpuA/E8ZD281jzX7a24p90ec3veApvpl56jwGu1yBqVh/u9AuB2js+HFOsuB/mBXS7WumlS4w3zL6jvRZDYrtYHZyWB0/dOEz3hY8M15bc3ncYj7tNOgyo4daqcUH7GcDx1V+6BNNvED2WhtuMdUNaMoAHABoGnmFBdLIELozrn48dOku8gtV5sBZVjbGSfbLVgaTPwzXNe3XOmdtReGFpaNSuKbTJz3cea6KxXfUt9pFFkhrc3uAOQ/M8/ZXNtLuZQLKVNoa1rTlv3ZuPEySt8JqObky3XI0WSQp7wqfE+abZxv/AFyVe2vkxzA8hmqQu2B0PpeE+Ll9Q2BsUmDg1vsvlyxH6QcoHkvpq6ba1wDD1Xgdk5acOISx7PLpoJUwlErVByVNSSgHoTZSoASpEIDQQhCSgo6ykUVfREK9IrOrD9FWsuqsv0TvZY9Ktn1VpVbNqrQRShCVwPygWuaDWA516o8WtIPs0ea7C860CAc3GB6z6ArgNuLQBUY4nKix7uQzDW/1YPAlc3NfTp4Z7cRtO3KiOLgD3MqPn4rnrneQXcG9b1EnyW/ewOGjP/jpSe8syHgX+iztmKXWeSNQ0d/WajjnjQ5L520L9YXGm7k4TxPVcT6qG76Wp5ratNimjDRlTdIO6HEjCOMT6KCzWfJHJdU+ObiRzABJWfVsz6j206VPHWqHDTadG7yXcABmTyWjaKgA0mPU7gPT9FddsxYBZIq12fTVQMbp/csPZptHkXHjxgJYY3Kq5MpjGls3s7SsFnwN69R2dV8ZvedTyHDkvI/lEtWKu7ll4/8AGFe3XtWwsJECBPgF897SVMVUzqS5x8T1QfBb38OaMsuwgevgqTc3CeM+ZT6758fb9e6ZT3lILVlf1p5/Fevnam1VDR/YywFwwE4gXHWATGR5BePWEw4EcR7r3ex0+ktlLF2adNzwOZwtbPgXHxSNvXdftQkNtFkq0ifrYS9ni4DLvW3KZSJUoAWkQSUjSlcEkpg5JKaXIBQR0oSSkQGohCElhRV9FKobRonCvSKyqzU0VWyK1V0KKU6VbKrD3hoJJgDUqvZN6q3nUJMfVbqPtHX4tH8R4BTndQ8Jtn3hbJfj3N6rRvJOvjIA8CvPPlBmQyetUfTaY0hmXkXkn+BdVTtuOu4DMUs3Rvdm6e/EGgeK4u+rQKtrBGYpy4cC5kgHxcJ8Vx95OrqMXaa0BtN8fWcGt/CyJ8M2j+EqxsvYMbgyMgxrnc8pA9fRY20pxVejbnginxlwEuP8xK3ruu84i4zIcYOhB0yjTIBdGGLDKutvSjhoPEDJvCNM/gsKmOqtG3Pf81fiJJGUnWHQBJ36OWbQpucA1gJJ4bhvJ4LPl7bcPiLGztMG04nCW0gXcjUJAb5ST3tHBb18XhDC4zERB1LicgFxuzl7sZbIHWaWPDozDWiCzvJcBPN4HFb1qc6s4PeIA7DdzeZ5rbjmsWPLd5HWzaH9iPSZOYCH5z1QeoJ4mR5c14/b6xLnOdk45kcCRp4CAum2lvZuN1KZAl7gOyaoyYHcmjM8wOC42o6TJTqTN/mnx1e8+yaBmpKw6zW8APM5pBLZGZjw+K9+2cqh1Z7iM3Mpx5v+ELwq76cuaPvAeZC932eoFtQzp0dM+rx+SU7P06lroEJzXqk6tmnsqrRLQJkTwUZKjpVE9BFKSUSkKZBKklCA10IBQksKG0aKZQ2jROFekNjVmtoVWsasVuyUXtM6VbKdVg7VW8UKZcdwJPM5n1MresuhXlvyuW98ua3sAAHm6CfY+iy5fTTi/KLY28IstprEy7FUeTvJdAYT5CFhXa7D1iZlzWjxiO6M/Ep+xtb9hrgmS+ozwbhOH1z8VQtIcaLQzVz6jTxBJMd2cLHX3Vrv7UFyWN1asXEScRJP3pl3r+sl6FYLtgZhM2dusNaSQAXEl38Rkx4krfs9GcuHst8WVUn3aH03MOjmuHxnwMLjr/vnC75nZIDnCHkDstiDLjJnrGTw56dftnegslle8HrvBYwcyM/IfDivMrTTNms+J/8AiKxJcTu6oDeeWJx7wiltp7DXWAypWyILnBrjl1aeRdylwd5Kpfu1RqE0bITGYdUGrjByp8vveXFUqturWkU7BYmkUabQ07i/D2qlY7mzJw895gDr9mtlmUaLjk6o4OGOM40ho3AkT5KrNJl28wvmyOpO62r8wODScp5lZ+HXy/NdLtXTxWpgOXVYDyjXxmVhtpy+BnLjCmKQsp/AeZhFpP0p7yPgp7yhkNBzBGL8vRVrUOvPOfPNAaF1uh7T+E+RXuNK0AdE/cQWHucGwfNo814ZYXZg8D7r16zPxWdgn6rT8R6pT2q9OiFo8lZpVljWSviaOPxVunUjer2ltU381bY87/P81j0aq1LM+ckQi9MEvTBQOp5pXMCpKTpwhRdEEIDdsx6oUqrWF2RVlJYUNo0UygtGic7Tl0ise9WLR2Sq9iU9p7JTvZTpQNXDTc7wHf8ArPwXmHysU5bAPaLQ4cHEZensvSbXUhjQcpcJ/CD1vSV5XeoqV6tW0Gmehw06rpkR18NMd+s8pXNybyz/AKb8fjH+3J7P2wsdWYBIIBA5Mdu54TPgtGwVOuRSeDJlrXQCeInSd3goqdkpUKpDqghzXQYM9YdU+3dmnWG7KFYY+mYD9fHLZPEZhO4lMnbWG/gAG1qFVjuTXZnlIA8iV0t21w8SARPGAeWQXE3Rdsj6Eh4G+XYDyDiTPgE2/doLTZaZe+iBBDWuJbmfqiA7Pjpu0VY7TlpS+Uq8gbZSa8/R0w4xxcyf9wC5mlSr3hWLmg4GwHPA6tMEzOZ1zOQ4zkM1Ti1W41KmB9QU83EDQEyQ0bzBmBOnn6psLTpCzt6BstI6wMZHfMHMnmq9p7ixcWzrbLRLWNAyJLtXPMauPw0G5bNgswFJg+63x6oUjKDgIaMuDichyO8eHiobLiaOiqmMOTT9po0IPECAR470w89+Ui6Ou2tSaJzD45ZtcfUT3Lz7pMGZIE6Aanx1hez7XWdooPe6ezA6xzJyblO8kLxK0UxiLichPjH6CRq9vM9+9I5+Jo4j2TKr5JPNQl8GQjQWKFXPw9l6vs3aps9PEdwHl/wvKLK0F7eBcPfNep2KkGU2BoMRu4zn3IkDasb3ExoPVajKgGQWPRJjPqjgNT4q7SdG6PRAalGotOyWiNdFh0nq/ZKiA26jhMjQ5pjimudDQRzSB0q0DpEKNCA1bsrAkhaSxrvHXEc/ZbKnHpYUFq0U6r2rRVO05dI7EprV2SobEpbX2SneynTmNqbX0dFuHN7zhaOM5E+APnC5u21K/RHo2NdTquBcwdpuHWDIlpJ04yuqvWxdIaBmML3ROhcRIB4A4T4wqgoYGlj8PVd2RlkRrJ1Jj0WP0/dW2/tjjbXs107f3L2aRiNOB3AEk+izbn2bp0axpW3MzNIvJ6J7eAGmMbwV6E1wGgEd4+CbXY14hwkcCAR5FVpG0NW2UKDC59RrGNBJzAgDgN/gvLqzq9823BTBbTbOGezSpTGN/wB90abzloCU/wCUW9ml4sVma0NBb0gY0AvqHs08tYkHvI4L0nYbZ5tks7KYE1HxUqkkTiLYDZ3hokDnJ3q5NIvmte4bio2Wk2lSbDWjfmSTmXE7yTmoqmzNlNQ1RSDXkyS2W4j94NInxWwT+pUb3opwxtIAQBAVa0UwcioLdfdCl+8qtbyOS46/tv6IGGg7E4/WjT8Ld574Cm01T5QryaG4Pqs1jQ1COqP4RJ78K8qosL8ozdDR+J7o9lp7Q3q+s4A9zWjMid7jvcVp7KXVLuleCWU5wgCekqnKG8gMp/JSbm7fYCwE8CQf5nD3Cyy1esP2eJouDwMTsRPDESXHwxOPkuGt2z1RrgWNJa6I457kwyrDSc5wwNJII7Ik6r0qwvcWiZEYZHAnX2Wbsns+5jjUMjdp7rbfSw1I3OHq0/kfROE1bMwwAPNX6bGjXMrPok8VcooprIeSc/JW6DlQac1aplIN6m6afcU5tJ8ZNJVWxPlrhy9Rmt+xuBY2OA9lUTe2T0FT7BSraQmWla6BmTyWqsy5t601MWFWteisqra9FU7Tl0bYVLa+yVFYVJbeyU72mfFVpWcPYWu0PDUEZgg7iDBTKth6RpbVDXOGjgImNJG49ysXfonudBElKzyrG+HLWqyimchCwdpr4Fms76urgIYOL3ZNGW6deQK7W+rNIJAXi3yl2lz6jKDZhnWIG975DQOYaD/9AloWnfJLs+60Wl1sq9ZlJx6zvrV3jETzIDi7ve07l6zVjGTAiYHh/eVnbHXeLJZKVIgTm55G9zsyfUAcgElqcQ53Ccu45g+RTpSNfpODio3Vlm07Sh1dCk1sotqDC8AhcHfewpe6aVXA07g0Se8iF2orpj6qnQ24S7fk7psOKrVLuMCPCdfiuroWJrAG02Q1uQ0ED7o3K0+oon1UxslQADTTmFQ+aNgDDpnqFZqVFEaiDRvECAAB3rItjDiEbitdzlAKWJ3iiJyNoFXaeibbbJ0bhGjhPdnBStOSVOVM0mNVLScCMis+11dGN1OqmoOw5JG2btqCRnBWBtpedoo/N/m1foXOqlpJjCQG6OndK0KdSCuO+UWo57qTACYqOIjOQWNPxKcRk6T/AKrev/tWXzCFyPzH7h8kLXX6Z7/b3W5vreHxWkhCzbhVbXoUITnac+jbBon27slCE72mdGXf2U2t2kIS9nOjrTr4FeB7W/8AcH/5tL2ooQiCu+sn7vwCv3tqPBCEGq00jkqEAgTXpUICB+qichCAYU1yEJGaU+ydoIQnCq1ffbp/g+JVVu7xQhKjFVZ+9KsHVCFKll2gWTbv8dZf4v8ASEqFWHaM+naIQhbsn//Z"
        itemdetail="Kwon Eunbi"
      />
      <LeftItem item="/images/covid.png" itemdetail="โควิด-19: ศูนย์ข้อมูล" />
      <LeftItem item="/images/friend.png" itemdetail="เพื่อน" />
      <LeftItem item="/images/page.png" itemdetail="เพจ" />
      <LeftItem item="/images/remind.png" itemdetail="ความทรงจำ" />

      {seemore ? (
        <>
          <LeftItem item="/images/f2.png" itemdetail="เกม" />
          <LeftItem item="/images/f1.png" itemdetail="กลุ่ม" />
          <LeftItem item="/images/f3.png" itemdetail="งาน" />
          <LeftItem item="/images/f4.png" itemdetail="ข้อเสนอ" />
          <LeftItem item="/images/f5.png" itemdetail="ที่บันทึกไว้" />
          <LeftItem item="/images/f6.png" itemdetail="รายการโปรด" />
          <LeftItem item="/images/f7.png" itemdetail="ล่าสุด" />
          <LeftItem item="/images/f8.png" itemdetail="ตัวจัดการโฆษณา" />

        </>
      ) : null}

      <div onClick={toggle} className="leftbar__dropdown">
        {seemore ? (
          <>
            <ArrowDropUpIcon />
            <p>ดูน้อยลง</p>
          </>
        ) : (
          <>
            <ArrowDropDownOutlinedIcon />
            <p>ดูเพิ่มเติม</p>
          </>
        )}
      </div>

      <div className="underline"></div>
      <h3>ทางลัดของคุณ</h3>

      <LeftItem
        item="https://yt3.ggpht.com/ytc/AAUvwnhgSeXQyMsziDW9GQpZb8WXpLFKlE-Kad5Q57vkAcw=s900-c-k-c0x00ffffff-no-rj"
        itemdetail="Mnet"
      />
      <LeftItem
        item="https://korism.com/_upload/news/2020/02/138958/15819496205.jpg"
        itemdetail="iz*one"
      />
      <LeftItem
        item="https://www.brighttv.co.th/wp-content/uploads/2018/10/Dqri_VRUwAAB8QA.jpg"
        itemdetail="wiz*one"
      />
      <LeftItem
        item="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm1oZoqY70gDtJZfpKuiPXNtr1uIvrPT_wyQ&usqp=CAU"
        itemdetail="iz*one community"
      />
      <LeftItem
        item="data:image/png;base64,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"
        itemdetail="iz*one market"
      />

      {seemoreb ? 
      (
          <>
           <LeftItem
            item='https://187436-553851-1-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/11/official-iz-one.jpg'
            itemdetail='eunbi thaifan'
            />
              <LeftItem
            item='https://dudeplace.co/wp-content/uploads/2019/04/izone-xpn-8.jpg'
            itemdetail='iz*one thaifan'
            />
              <LeftItem
            item='https://www.brighttv.co.th/wp-content/uploads/2018/10/IZONE-debut-cover.jpg'
            itemdetail='iz*one international'
            />
              <LeftItem
            item='https://thestandard.co/wp-content/uploads/2018/09/produce-48-izone-12-1.jpg'
            itemdetail='iz*one meme'
            />
         

            </>

      ) : (null)
      
    }


           
<div onClick={toggleb} className="leftbar__dropdown">
        {seemoreb ? (
          <>
            <ArrowDropUpIcon />
            <p>ดูน้อยลง</p>
          </>
        ) : (
          <>
            <ArrowDropDownOutlinedIcon />
            <p>ดูเพิ่มเติม</p>
          </>
        )}
      </div>








      <div className="leftbar__footer">
        <p>
          ความเป็นส่วนตัว · เงื่อนไข · ลงโฆษณา · ตัวเลือกโฆษณา · คุกกี้ ·
          Facebook © 2020
        </p>
      </div>
    </div>
  );
}

export default LeftBar;
