$headers = @{'Referer'='https://sites.google.com/view/cultest-evol-archive'}
$imgs = @(
  @{n='J17'; u='https://lh3.googleusercontent.com/sitesv/APaQ0SThKpwZKauTku44rCxciI5puDKtLKfb7JXRL6LgUZcKZjA4vVR_ae72WdGHUqoMHAYHvpBlPdv0amxPHdvPUu5fEx9G3Kf8y_3WsUdaKZzGzOHuxfUqUfd-8RUtJ7_93--BRrsTLVEM-wImMRhoWLLmpadfQGY4LhS_zIycmK65hl4iV4Bpa6gSFqs6pCcEgAkSA0B5ZyJ6Elyogt4GNkY-YwUlayzmIBEOr5o=w1280'},
  @{n='J1';  u='https://lh3.googleusercontent.com/sitesv/APaQ0STRxpi85iSLtOHbThsocU7ZEBetD1GBwB6E5x8vpKIYw4toM50ucBBDCmigWsYxkcxDdmDb6RfqfNXgvLhBH2KTaDupHIU4IsTdFYw1Tb4frrvSAYMFgVn93ujTPNC7vw_OthIcEB9hyN16DdbxfSSlbtn8x6TlAdE1hCmJRdNrKRadvjSffh0ULX09Jh94YbXo_hRsusxfrh_y0PoK-qoGyVAuUZTOAkNdwYk=w1280'},
  @{n='J3';  u='https://lh3.googleusercontent.com/sitesv/APaQ0SQtNkUuG7HaOwwybwKVYLYRxNeTeFkKwHfq1adXG92cRel0DDnRPMOzIC8pwT_lcSRIIbMiOlDnxGUs6hh_tvg67FF5pmpOkOvw6AD_uYiE3r2kqGSAA3BDoW63h7ZE1jPcqAM4ZUtrB8xannYyZnYH29XNLgBni0NEe-uE4iF6hmZkxLgE3-eveM627aG7LacTZJUTClokeV5xA3YnhbkZVhAJFZwkXlEa=w1280'},
  @{n='J6';  u='https://lh3.googleusercontent.com/sitesv/APaQ0SRbX70TH_kkA7SxuuIr7tBHKsGuLxhjwxVSbSpgCCP8fwDgi8HnFHPGG1xCQnc4ictAMDqi2Cfkj6eyleKyMWxzjAxuGvs8reP9dmMzb6kVJpFasjqCDgQOVrqyJ94skko3G-CmOjxMDSPWONVwqxz9W_HPaiBD9VWrxAQzFmMCX1_gqA_kn0_MpyHy_Tq2nGp16hQSN7JfOZmylKFLsBpOcYuyVM5nGoEPOZw=w1280'},
  @{n='J7';  u='https://lh3.googleusercontent.com/sitesv/APaQ0STWB2MQdIy7uGQoF2CyNPbpfqMwQj4c47x0vzy36mI65_h1ZL-Gh8q53MxXFaBgp-AWd9D8bbB34J1sCW3igkr5Uv1K8ENMGGM6y1Si19mDIP1ANd8yUf6k49WSV0YYJGv9wwi_eE9PupFyeMNYIahp_eBthsy5e48gp3YDYp7IeIkSDXlQkRS9BIaAylfmoVXgQdq-nXEGSJc41fbzwQU3ov2czl2LqwzTf5c=w1280'},
  @{n='J8';  u='https://lh3.googleusercontent.com/sitesv/APaQ0SRKEW58uAsRkZAY0Uq4U9wbd3_LvJBo8B8hFmk8R675NAU1qLXh9ni5Vh2hAAs8ghuVjmk6bUnhyUD8zBcny9OcVMpMd_N_bxCcmqZotbPAsOxZTM0m8srXTnLz3KE79OJn2ONfnLrF_KeMC7_wVuk3TrqjZlGGUdYVabp-XaHsaiRunll5CShRKurfvP2aZOEwx_wzVCjNKIJmg2cju_21EGJLKOP-O5mX=w1280'},
  @{n='J12'; u='https://lh3.googleusercontent.com/sitesv/APaQ0SQSSj4dJfk5i7rOhZIZmoOH0DO02z0qodblXLctYLam4_7wHPoRam1IIpd5_QLe8_1QmYNZ97wsEJDJb262sAcgB2xkwbQOfAd07WTrIASG5O5XUJcm5-oDTpZnEsbq5I4pb1ko8HXG9yS0-K5WiNqfzi3PnTvULMJYG5_gyf6z8gn4JanMrvJh9KRAMowS-zVKUv6II_fE7rbECtjCe0H90bnuXbODMhhN=w1280'},
  @{n='J15'; u='https://lh3.googleusercontent.com/sitesv/APaQ0SSUavqbGvvd14LWrA24Qd-Oi5UFnrpa9NwArv6yMHdstGMyj3S-1L7wMt4s9LL3LwTNwi-M4km0KxV6RfUmArYYlz1bU8_bxe9DJ7_XyCtPQK-GwrIqmTUJat2FvL9NXzwcigAeosqoR_jRNdtnBM_2RR0wwiFH43iYizcIJ2zvDXJguWufnkl9To5zX-ZTJsx-NZUwjJcHRCoNlNswqdmE8hRaDtdyGpmn=w1280'},
  @{n='J14'; u='https://lh3.googleusercontent.com/sitesv/APaQ0STvzGqVSwzmjE-LQtgV4gIQ1NYlGlxDOzpfpJ7urfbSbFLfeoEzKia8n_xs3JUHOVhzeLfOmtbAMu06z0dLJ6mZrrYkFty4Qk1ryKl9IWJQ_2H1EPNaA8XBawFa-yv3o2ZPvaQy3slBlRzSr000Cmxey8qtiFkfj-EJAHHt2HAV2ggMpVXKPAH7HySLQUn7cKh144HNcFHrZEaEkgKSHgjoc=w1280'},
  @{n='J16'; u='https://lh3.googleusercontent.com/sitesv/APaQ0SSGI2nrGJOMvD_skWM3kWQpf0RUeR6jU4OL1UISJ-d5zpHlPjTyt1DuHp2kdnBYXPwdwtU5VFk31TYC9RUjzwDMv5j6ynpEM2ahLEIfAC3HfwTSJJv5mK6zxMH2hdaPFpZH35dfZFFmFSobdguH_-cuZv3oES-ImaQRu9-7jmCeKrP4hkxEnRHKFPpPdnH-EMZZO8IyygsqPdJR_SJk_jZ6garmHRWYleuZ=w1280'},
  @{n='J19'; u='https://lh3.googleusercontent.com/sitesv/APaQ0SS51I2NHorpyeoiZm9CUXvFeL8_83QHS1GtwOg4wrcrgNTGkpUbzh6iDvTpo4x05SOKAYobB6ak9k2WXaeh3lUhZ-CvjxJA18KuEpAkDHlTCqUfgf1JEFg5ivG1TDfG6FoERVPqXJlyD4KxJAbZHcnaAolx7y1LBgrTm7IXUAxe7qdN8lO_Z-hDhRexbwevjO1pmb0uVZoGZYOi42HKZ6DlmoaSaCNEjVkr=w1280'},
  @{n='J21'; u='https://lh3.googleusercontent.com/sitesv/APaQ0STbgq1eVq4vKy_rAlCX2sVjwFCJAQquGHce9gILJ8Krl_EdzbS1JWLoSrB3zVLJy1zkjUXNRUxJYLzmsSWIIv-JvZLQjKldnQZjWHKWGJZLmwbnRx4bsM_oK-VwDgKw5H7AnmbbxuRnaSOBLADM5w47eW30J4XITnkhDok0bgGq7gtYjAFOhbtfd0SIf0jKynE458NGX8dZwkHb35a7oPw0c8eIZdF-N76d8Vg=w1280'},
  @{n='J26'; u='https://lh3.googleusercontent.com/sitesv/APaQ0STVN4ndxB1rpWmwanPgv6GadwFa6KDoRWYSoboXlbJOnwrjCINLNfEawX2pNDmwRLfviG4KaU9UqIYGGDdjlFa9_8VVSJzd7n4DN441sELboIu98lNWCKpzp7fB9A7MW46cp0-CewvlYqg0ft0dg93D8hhP_eYJhaHEhjV5QKKZJ7k-4gqZr6ugNpd5_hfQaO_brR99oUGJ81Pwq28J0xGKBjqttf8sJcv_r9Q=w1280'},
  @{n='J27'; u='https://lh3.googleusercontent.com/sitesv/APaQ0STcQ2X74AWE1f6hXdgGaK0PFmaOj-7XeeNGhWK8RITxrpC69Z2cuxlS11zdtAaciEBS50qa83Hw6KhcKES5-jiLxeMfGQ3EPjkdtS6ESRLyaP5Qz2OHCzNJcT_uDA1op0R9wlY25LbHv8QWnYdxHcmMbRz0lURp49tCNl3viTpNR3yzU9ljNJinav5HSJRePhEWXUaesf-QMCOtuTRJ0A5xoaTAIKWH2W_eW6k=w1280'},
  @{n='J29'; u='https://lh3.googleusercontent.com/sitesv/APaQ0SQ6qtsy5cV80vyl4cSFPH9YCRlTRsi_k9QCFRWIY_kj_eTWpFWzypYGJaggSrEUT3uOv2EzNecENZs6ryJb3ZXd34uJlytc7PxYcEEdXrrYkrFd1BFLGoJ15yMhtOF-LaU5aJz92OZGC0ZviYp_m5Br35gInfeLDOIsF0TcgLaiz69kaagjbS5_4OWG8JeFu92QiRqK3ZVeSWUhwhej1q-tWL4_8_6j4Cut=w1280'},
  @{n='J30'; u='https://lh3.googleusercontent.com/sitesv/APaQ0SQxcB9gG5Oppsb5z5E_ubyRtiO6M742Sg-YSuf6gw4T-_tBuY0g1kvWkmMCRsBrb7q-1e2vS8ygePYucCoS_GcErQTkWi2IMTOdtgA-7Bsp-ZMS0VuYz03P6V7e78gOFW7f4Vki7G8h6teLxppW3Ih0pICjJFpFrEbI8FamzU9PAQsNZcA5K-aaRe0HsTYU-UJKJbx0x3zt-8LGoeGy2PY38mXlVDsz92n6MNw=w1280'}
)
foreach ($img in $imgs) {
  $path = "C:\Claude Code\CultestEvol\images\" + $img.n + ".jpg"
  try {
    Invoke-WebRequest -Uri $img.u -Headers $headers -OutFile $path -UseBasicParsing
    Write-Host ("OK " + $img.n)
  } catch {
    Write-Host ("FAIL " + $img.n + ": " + $_.Exception.Message)
  }
}
